import express from "express";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { runDemo } from "../demo/runDemo.js";
import { loadDashboardData } from "../dashboard/dataAdapter.js";

export function createDashboardApp(rootDir = process.cwd()): express.Express {
  const app = express();
  const dashboardDist = join(rootDir, "dist-dashboard");

  app.use(express.json());

  app.get("/api/dashboard", async (_request, response, next) => {
    try {
      response.json(await loadDashboardData(rootDir));
    } catch (error) {
      next(error);
    }
  });

  app.post("/api/run-demo", async (_request, response, next) => {
    try {
      await runDemo({ command: "dashboard Run Demo" });
      response.json(await loadDashboardData(rootDir));
    } catch (error) {
      next(error);
    }
  });

  if (existsSync(dashboardDist)) {
    app.use(express.static(dashboardDist));
    app.get(/.*/, (_request, response) => {
      response.sendFile(join(dashboardDist, "index.html"));
    });
  } else {
    app.get("/", (_request, response) => {
      response
        .type("html")
        .send("<h1>RAG Regression Lab</h1><p>Run npm run dashboard:build, then restart npm run dashboard.</p>");
    });
  }

  app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
    const message = error instanceof Error ? error.message : String(error);
    response.status(500).json({ error: message });
  });

  return app;
}

export function startDashboardServer(options: { rootDir?: string; port?: number } = {}) {
  const port = options.port ?? Number(process.env.RAG_DASHBOARD_PORT ?? "4317");
  const app = createDashboardApp(options.rootDir ?? process.cwd());
  return app.listen(port, () => {
    console.log(`RAG Regression Lab dashboard: http://127.0.0.1:${port}`);
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  startDashboardServer();
}
