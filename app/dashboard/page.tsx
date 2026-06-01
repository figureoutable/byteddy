"use client";

import { useMemo, useState } from "react";
import { PeriodToggle } from "@/components/dashboard/PeriodToggle";
import { MonthPicker } from "@/components/dashboard/MonthPicker";
import { IncomeBreakdownCard } from "@/components/dashboard/IncomeBreakdownCard";
import { TopMetricCard } from "@/components/dashboard/TopMetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { SalesPerformanceChart } from "@/components/dashboard/SalesPerformanceChart";
import { SalesByChannelChart } from "@/components/dashboard/SalesByChannelChart";
import { OperatingExpensesCard } from "@/components/dashboard/OperatingExpensesCard";
import { InventoryLevelsCard } from "@/components/dashboard/InventoryLevelsCard";
import { InventorySnapshot } from "@/components/dashboard/InventorySnapshot";
import {
  DASHBOARD_CURRENT_MONTH,
  DASHBOARD_PREVIOUS_MONTH,
  getDashboardMonth,
  type Period,
} from "@/lib/dummy-data";

export default function DashboardPage() {
  const [monthKey, setMonthKey] = useState(DASHBOARD_CURRENT_MONTH);

  const activePeriod: Period | null =
    monthKey === DASHBOARD_CURRENT_MONTH
      ? "thisMonth"
      : monthKey === DASHBOARD_PREVIOUS_MONTH
        ? "lastMonth"
        : null;

  const month = useMemo(() => getDashboardMonth(monthKey), [monthKey]);

  const handlePeriodChange = (period: Period) => {
    setMonthKey(
      period === "thisMonth" ? DASHBOARD_CURRENT_MONTH : DASHBOARD_PREVIOUS_MONTH
    );
  };

  const coreMetrics = [month.profit, month.tax, month.daysTillTax];
  const { primary, secondary } = month.ecommerce;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <PeriodToggle active={activePeriod} onChange={handlePeriodChange} />
        <MonthPicker value={monthKey} onChange={setMonthKey} />
      </div>

      <section className="space-y-4">
        <p className="section-label">Core finance</p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <IncomeBreakdownCard income={month.income} />
          {coreMetrics.map((metric) => (
            <TopMetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <p className="section-label">Ecommerce performance</p>
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

      <div className="grid items-stretch gap-6 lg:grid-cols-5">
        <div className="flex lg:col-span-3">
          <OperatingExpensesCard />
        </div>
        <div className="flex lg:col-span-2">
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
