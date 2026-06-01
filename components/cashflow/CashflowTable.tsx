import type { CashflowWeek } from "@/lib/dummy-data";
import { formatCurrency } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function CashflowTable({
  weeks,
  highlightedWeeks,
}: {
  weeks: CashflowWeek[];
  highlightedWeeks: number[];
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-page">
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-secondary">
                Week
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-secondary">
                Opening balance
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-secondary">
                Cash in
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-secondary">
                Cash out
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-secondary">
                Closing balance
              </th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((row, index) => {
              const highlighted = highlightedWeeks.includes(row.week);

              return (
                <tr
                  key={row.week}
                  className={cn(
                    index % 2 === 0 ? "bg-surface" : "bg-page",
                    highlighted && "ring-1 ring-inset ring-primary/25"
                  )}
                >
                  <td className="px-4 py-3 text-primary">
                    <span className="flex items-center gap-2">
                      Week {row.week}
                      {highlighted && (
                        <span className="rounded bg-page px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-secondary">
                          Scenario
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-primary">
                    {formatCurrency(row.openingBalance)}
                  </td>
                  <td className="px-4 py-3 text-success">
                    {formatCurrency(row.cashIn)}
                  </td>
                  <td className="px-4 py-3 text-danger">
                    {formatCurrency(row.cashOut)}
                  </td>
                  <td className="px-4 py-3 font-medium text-primary">
                    {formatCurrency(row.closingBalance)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
