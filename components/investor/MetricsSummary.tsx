import { investorStats } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export function MetricsSummary() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {investorStats.map((stat) => (
        <Card key={stat.label} className="px-4 py-[14px]">
          <p className="text-xs font-medium tracking-widest text-secondary uppercase">
            {stat.label}
          </p>
          <p className="mt-2 font-medium text-2xl text-primary">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}
