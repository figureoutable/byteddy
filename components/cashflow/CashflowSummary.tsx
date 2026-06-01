import { formatCurrency } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export function CashflowSummary({
  baseClosing,
  projectedClosing,
  activeCount,
}: {
  baseClosing: number;
  projectedClosing: number;
  activeCount: number;
}) {
  if (activeCount === 0) return null;

  const delta = projectedClosing - baseClosing;
  const isPositive = delta >= 0;

  return (
    <Card className="border-l-[3px] border-l-primary">
      <p className="text-xs font-medium uppercase tracking-wide text-secondary">
        Scenario impact
      </p>
      <p className="mt-2 text-sm text-secondary">
        Week 12 closing balance with {activeCount} scenario
        {activeCount === 1 ? "" : "s"} applied
      </p>
      <div className="mt-3 flex flex-wrap items-baseline gap-2">
        <span className="text-sm text-secondary line-through">
          {formatCurrency(baseClosing)}
        </span>
        <span className="font-medium text-2xl text-primary">
          {formatCurrency(projectedClosing)}
        </span>
        <span
          className={
            isPositive ? "text-sm text-success" : "text-sm text-danger"
          }
        >
          {isPositive ? "+" : ""}
          {formatCurrency(delta)}
        </span>
      </div>
    </Card>
  );
}
