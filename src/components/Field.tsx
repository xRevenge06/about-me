"use client";

const COLS = [
  [
    "type System = { id: string; status: 'live' }",
    "async function ship(mod: Module) {",
    "  const schema = await db.migrate()",
    "  return api.mount(schema)",
    "}",
    "const erp = { sales, field, ledger }",
    "export const crm = createClient()",
    "if (ready) queue.push(job)",
    "watch('/ops', { recursive: true })",
    "return NextResponse.json(ok)",
  ],
  [
    "interface Ledger { entries: Row[] }",
    "const auth = await session.verify()",
    "router.post('/api/cases', handler)",
    "query.select().from(clients)",
    "cache.set(key, payload, 3600)",
    "deploy({ env: 'production' })",
    "metrics.inc('systems.shipped')",
    "catch (err) { log.fatal(err) }",
    "tsx src/jobs/sync.ts",
    "git commit -m 'feat: billing'",
  ],
  [
    "namespace Revark { export class Core }",
    "useQuery(['pipeline'], fetchDeals)",
    "prisma.order.findMany({ take: 50 })",
    "dotnet build ./src/Api.csproj",
    "docker compose up -d postgres",
    "ssl: true, pool: { max: 20 }",
    "on('webhook', settleInvoice)",
    "assert.equal(status, 200)",
    "pnpm --filter web build",
    "uptime 6y  // still compiling",
  ],
];

export default function Field() {
  return (
    <div className="field" aria-hidden>
      <div className="field-grid" />
      <div className="field-code">
        {COLS.map((col, i) => (
          <pre key={i} className={`field-col field-col-${i + 1}`}>
            {[...col, ...col].join("\n")}
          </pre>
        ))}
      </div>
      <div className="field-vignette" />
    </div>
  );
}
