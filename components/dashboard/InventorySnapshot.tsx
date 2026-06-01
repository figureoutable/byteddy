import { inventorySkus, formatNumber } from "@/lib/dummy-data";
import { StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function InventorySnapshot() {
  return (
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
  );
}
