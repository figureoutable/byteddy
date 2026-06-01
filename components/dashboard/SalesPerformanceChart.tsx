"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  formatCurrency,
  salesEventMarker,
  salesPerformance12Months,
} from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export function SalesPerformanceChart() {
  return (
    <Card className="min-h-[360px]">
      <h2 className="font-medium text-base text-primary">Sales performance</h2>
      <p className="mt-1 text-sm text-secondary">Last 12 months</p>
      <div className="mt-4 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesPerformance12Months}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#C8BFB0" strokeOpacity={0.25} vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9A8878", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9A8878", fontSize: 12 }}
              tickFormatter={(value) => `£${Math.round(Number(value) / 1000)}k`}
            />
            <Tooltip
              contentStyle={{
                background: "#FAF8F5",
                border: "0.5px solid #C8BFB0",
                borderRadius: 8,
                color: "#2C1A0E",
              }}
              formatter={(value, name) => {
                if (typeof value !== "number") return ["", ""];
                const labels: Record<string, string> = {
                  netSales: "Net sales",
                  grossSales: "Gross sales",
                  returns: "Returns",
                };
                return [formatCurrency(value), labels[String(name)] ?? String(name)];
              }}
            />
            <ReferenceLine
              x={salesEventMarker.month}
              stroke="#993C1D"
              strokeDasharray="4 4"
              label={{
                value: salesEventMarker.label,
                position: "insideTopRight",
                fill: "#993C1D",
                fontSize: 11,
              }}
            />
            <Area
              type="monotone"
              dataKey="netSales"
              stroke="#2C1A0E"
              fill="#2C1A0E"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="grossSales"
              stroke="#7A6A5A"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="returns"
              stroke="#993C1D"
              strokeWidth={1.5}
              dot={false}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) => {
                const labels: Record<string, string> = {
                  grossSales: "Gross sales",
                  returns: "Returns",
                  netSales: "Net sales",
                };
                return (
                  <span className="text-xs text-secondary">
                    {labels[value] ?? value}
                  </span>
                );
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
