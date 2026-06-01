"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueByMonth } from "@/lib/dummy-data";
import { chartTheme } from "@/lib/chart-theme";
import { Card } from "@/components/ui/card";

const { grid, axis, tooltip, series } = chartTheme;

export function RevenueChart() {
  return (
    <Card className="h-full min-h-[320px]">
      <h2 className="font-medium text-base">Monthly revenue</h2>
      <p className="mt-1 text-sm text-secondary">Last 6 months</p>
      <div className="mt-4 h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueByMonth}
            margin={{ top: 8, right: 8, left: 4, bottom: 0 }}
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
              tickFormatter={(value) => `£${Math.round(value / 1000)}k`}
            />
            <Tooltip
              cursor={{ fill: "rgba(44, 26, 14, 0.04)" }}
              contentStyle={tooltip}
              formatter={(value) =>
                typeof value === "number"
                  ? [`£${value.toLocaleString("en-GB")}`, "Revenue"]
                  : ["", ""]
              }
            />
            <Bar
              dataKey="revenue"
              fill={series.primary}
              radius={[4, 4, 0, 0]}
              maxBarSize={48}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
