import { inventoryStockLevels } from "@/lib/dummy-data";
import { StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InventoryLevelsCard() {
  return (
    <Card className="min-h-[320px]">
      <h2 className="font-medium text-base text-primary">Inventory levels</h2>
      <p className="mt-1 text-sm text-secondary">Top SKUs by stock on hand</p>
      <ul className="mt-5 space-y-5">
        {inventoryStockLevels.map((item) => {
          const fillPercent = Math.min(
            100,
            Math.round((item.units / item.capacity) * 100)
          );

          return (
            <li key={item.name}>
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="truncate text-sm text-primary">{item.name}</p>
                <StatusBadge status={item.status} />
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-page">
                <div
                  className={cn(
                    "h-full rounded-full transition-colors",
                    item.status === "reorderNow"
                      ? "bg-danger"
                      : item.status === "lowStock"
                        ? "bg-warning"
                        : "bg-primary"
                  )}
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-muted">
                {item.units} / {item.capacity} units ({fillPercent}%)
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
