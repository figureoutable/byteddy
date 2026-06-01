import { cn } from "@/lib/utils";
import type { StockStatus } from "@/lib/dummy-data";
import { stockStatusLabels } from "@/lib/dummy-data";

const statusStyles: Record<StockStatus, string> = {
  inStock: "bg-success-bg text-success",
  lowStock: "bg-warning-bg text-warning",
  reorderNow: "bg-danger-bg text-danger",
};

export function StatusBadge({ status }: { status: StockStatus }) {
  return (
    <span
      className={cn(
        "inline-flex rounded border border-current/15 px-2 py-0.5 text-xs font-medium",
        statusStyles[status]
      )}
    >
      {stockStatusLabels[status]}
    </span>
  );
}

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "rounded border border-border bg-page px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-secondary uppercase",
        className
      )}
    >
      Coming soon
    </span>
  );
}
