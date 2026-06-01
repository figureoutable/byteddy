import type { MetricCardData } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

const subLabelToneClass = {
  neutral: "text-secondary",
  success: "text-success",
  warning: "text-warning",
} as const;

export function TopMetricCard({ metric }: { metric: MetricCardData }) {
  const tone = metric.subLabelTone ?? "neutral";

  return (
    <div
      className={cn(
        "card-surface px-4 py-[14px]",
        metric.accent && "border-l-[3px] border-l-primary pl-[13px]"
      )}
    >
      <p className="text-xs font-medium tracking-widest text-secondary uppercase">
        {metric.label}
      </p>
      <p className="mt-2 font-medium text-2xl text-primary">{metric.value}</p>
      <p className={cn("mt-1 text-sm", subLabelToneClass[tone])}>{metric.subLabel}</p>
    </div>
  );
}
