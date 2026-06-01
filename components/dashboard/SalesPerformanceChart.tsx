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
import { chartTheme } from "@/lib/chart-theme";
import { Card } from "@/components/ui/card";

const { grid, axis, tooltip, series } = chartTheme;

export function SalesPerformanceChart() {
  return (
    <Card className="min-h-[360px]">
      <h2 className="font-medium text-base">Sales performance</h2>
      <p className="mt-1 text-sm text-secondary">Last 12 months</p>
      <div className="mt-4 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesPerformance12Months}
            margin={{ top: 12, right: 12, left: 4, bottom: 0 }}
          >
            <CartesianGrid
              stroke={grid.stroke}
              strokeOpacity={grid.opacity}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={{ stroke: grid.stroke }}
              tickLine={false}
              tick={axis}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={axis}
              tickFormatter={(value) => `£${Math.round(Number(value) / 1000)}k`}
            />
            <Tooltip
              contentStyle={tooltip}
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
              stroke={series.danger}
              strokeWidth={2}
              strokeDasharray="5 5"
              label={{
                value: salesEventMarker.label,
                position: "insideTopRight",
                fill: series.danger,
                fontSize: 11,
                fontWeight: 500,
              }}
            />
            <Area
              type="monotone"
              dataKey="netSales"
              stroke={series.primary}
              fill={series.primary}
              fillOpacity={0.18}
              strokeWidth={2.5}
            />
            <Line
              type="monotone"
              dataKey="grossSales"
              stroke={series.secondary}
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="returns"
              stroke={series.danger}
              strokeWidth={2}
              dot={false}
            />
            <Legend
              verticalAlign="bottom"
              height={40}
              iconType="circle"
              iconSize={8}
              formatter={(value) => {
                const labels: Record<string, string> = {
                  grossSales: "Gross sales",
                  returns: "Returns",
                  netSales: "Net sales",
                };
                return (
                  <span className="text-xs font-medium text-secondary">
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
