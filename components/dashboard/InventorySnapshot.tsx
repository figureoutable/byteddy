import { inventorySkus, orderVolume, formatNumber } from "@/lib/dummy-data";
import { StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function InventorySnapshot() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <h2 className="font-medium text-base text-primary">Inventory snapshot</h2>
        <ul className="mt-4 divide-y divide-border/60">
          {inventorySkus.map((sku) => (
            <li
              key={sku.name}
              className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div className="min-w-0">
                <p className="truncate text-sm text-primary">{sku.name}</p>
                <p className="text-xs text-muted">{formatNumber(sku.units)} units</p>
              </div>
              <StatusBadge status={sku.status} />
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="font-medium text-base text-primary">Order volume</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-secondary">This month</span>
            <span className="font-medium text-primary">
              {formatNumber(orderVolume.thisMonth)} orders
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-secondary">Last month</span>
            <span className="font-medium text-primary">
              {formatNumber(orderVolume.lastMonth)} orders
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
