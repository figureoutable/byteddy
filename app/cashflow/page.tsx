import { ForecastChart } from "@/components/cashflow/ForecastChart";
import { CashflowTable } from "@/components/cashflow/CashflowTable";
import { cashflowAssumptions } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export default function CashflowPage() {
  return (
    <div className="space-y-6">
      <ForecastChart />
      <CashflowTable />

      <Card>
        <h2 className="font-medium text-base text-primary">Key assumptions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-secondary">
          {cashflowAssumptions.map((assumption) => (
            <li key={assumption}>{assumption}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
