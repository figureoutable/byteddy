"use client";

import { useState } from "react";
import { PeriodToggle } from "@/components/dashboard/PeriodToggle";
import { TopMetricCard } from "@/components/dashboard/TopMetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { InventorySnapshot } from "@/components/dashboard/InventorySnapshot";
import { dashboardMetrics, type Period } from "@/lib/dummy-data";

export default function DashboardPage() {
  const [period, setPeriod] = useState<Period>("thisMonth");
  const metrics = dashboardMetrics[period];
  const metricList = [
    metrics.income,
    metrics.profit,
    metrics.tax,
    metrics.daysTillTax,
  ];

  return (
    <div className="space-y-6">
      <PeriodToggle period={period} onChange={setPeriod} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metricList.map((metric) => (
          <TopMetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RevenueChart />
        </div>
        <div className="lg:col-span-2">
          <InventorySnapshot />
        </div>
      </div>
    </div>
  );
}
