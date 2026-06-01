import type { MetricCardData } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

export function TopMetricCard({ metric }: { metric: MetricCardData }) {
  return (
    <div
      className={cn(
        "rounded-[10px] border-hairline border-border bg-surface px-4 py-[14px]",
        metric.accent && "border-l-[3px] border-l-primary"
      )}
    >
      <p className="text-xs font-normal tracking-widest text-muted uppercase">
        {metric.label}
      </p>
      <p className="mt-2 font-medium text-2xl text-primary">{metric.value}</p>
      <p className="mt-1 text-sm text-secondary">{metric.subLabel}</p>
    </div>
  );
}
