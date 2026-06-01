import { cashflowForecast, formatCurrency } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export function CashflowTable() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b-hairline border-border bg-surface">
              <th className="px-4 py-3 font-medium text-muted">Week</th>
              <th className="px-4 py-3 font-medium text-muted">Opening balance</th>
              <th className="px-4 py-3 font-medium text-muted">Cash in</th>
              <th className="px-4 py-3 font-medium text-muted">Cash out</th>
              <th className="px-4 py-3 font-medium text-muted">Closing balance</th>
            </tr>
          </thead>
          <tbody>
            {cashflowForecast.map((row, index) => (
              <tr
                key={row.week}
                className={index % 2 === 0 ? "bg-surface" : "bg-page"}
              >
                <td className="px-4 py-3 text-primary">Week {row.week}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
