import { startDashboardServer } from "./dashboardServer.js";

const port = Number(process.env.RAG_DASHBOARD_SMOKE_PORT ?? "4318");
const server = startDashboardServer({ port });

try {
  const response = await fetch(`http://127.0.0.1:${port}/api/dashboard`);
  if (!response.ok) {
    throw new Error(`Dashboard API returned ${response.status}`);
  }
  const data = (await response.json()) as { rows?: unknown[] };
  console.log(`Dashboard smoke passed: ${data.rows?.length ?? 0} rows`);
} finally {
  server.close();
}
