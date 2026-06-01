import type { ForecastResult } from "@/lib/forecast";
import { formatCurrency } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export function ProjectionSummary({
  result,
  churnRate,
}: {
  result: ForecastResult;
  churnRate: number;
}) {
  const items = [
    {
      label: "Ending projected monthly revenue",
      value: formatCurrency(result.endingRevenue),
    },
    {
      label: "Projected annual revenue",
      value: formatCurrency(result.projectedAnnualRevenue),
    },
    {
      label: "Ending projected customers",
      value: result.endingCustomers.toLocaleString("en-GB"),
    },
    {
      label: "Churn input",
      value: `${(churnRate * 100).toFixed(1)}%`,
    },
    {
      label: "LTV:CAC ratio",
      value: `${result.ltvCacRatio.toFixed(2)}x`,
    },
  ];

  return (
    <Card>
      <h2 className="font-medium text-base text-primary">Projection summary</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-md border-hairline border-border bg-page px-3 py-3"
          >
            <p className="text-xs text-muted">{item.label}</p>
            <p className="mt-2 font-medium text-xl text-primary">{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
