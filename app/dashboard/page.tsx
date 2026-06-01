"use client";

import { useState } from "react";
import { PeriodToggle } from "@/components/dashboard/PeriodToggle";
import { TopMetricCard } from "@/components/dashboard/TopMetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { SalesPerformanceChart } from "@/components/dashboard/SalesPerformanceChart";
import { SalesByChannelChart } from "@/components/dashboard/SalesByChannelChart";
import { OperatingExpensesCard } from "@/components/dashboard/OperatingExpensesCard";
import { InventoryLevelsCard } from "@/components/dashboard/InventoryLevelsCard";
import { InventorySnapshot } from "@/components/dashboard/InventorySnapshot";
import {
  dashboardMetrics,
  dashboardPeriodLabels,
  ecommerceKpis,
  type Period,
} from "@/lib/dummy-data";

export default function DashboardPage() {
  const [period, setPeriod] = useState<Period>("thisMonth");
  const metrics = dashboardMetrics[period];
  const coreMetrics = [
    metrics.income,
    metrics.profit,
    metrics.tax,
    metrics.daysTillTax,
  ];
  const { primary, secondary } = ecommerceKpis[period];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <PeriodToggle period={period} onChange={setPeriod} />
        <span className="rounded-md border-hairline border-border bg-surface px-3 py-1.5 text-sm text-secondary">
          {dashboardPeriodLabels[period]}
        </span>
      </div>

      <section className="space-y-4">
        <p className="text-xs tracking-widest text-muted uppercase">Core finance</p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {coreMetrics.map((metric) => (
            <TopMetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-xs tracking-widest text-muted uppercase">
          Ecommerce performance
        </p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {primary.map((metric) => (
            <TopMetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SalesPerformanceChart />
        </div>
        <div className="lg:col-span-2">
          <SalesByChannelChart />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {secondary.map((metric) => (
          <TopMetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <OperatingExpensesCard />
        </div>
        <div className="lg:col-span-2">
          <InventoryLevelsCard />
        </div>
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
