"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ForecastMonth } from "@/lib/forecast";
import {
  forecastMeta,
  formatCurrency,
  formatNumber,
} from "@/lib/dummy-data";
import { chartTheme } from "@/lib/chart-theme";
import { Card } from "@/components/ui/card";

const { grid, axis, tooltip, series } = chartTheme;

export function RevenueForecastChart({
  months,
  monthsForward,
}: {
  months: ForecastMonth[];
  monthsForward: number;
}) {
  return (
    <Card>
      <h2 className="font-medium text-base">Historical + projected revenue</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="stat-inset">
          <p className="text-xs font-medium text-secondary">Current revenue (starting base)</p>
          <p className="mt-1 font-medium text-primary">
            {formatCurrency(forecastMeta.startingRevenue)}
          </p>
        </div>
        <div className="stat-inset">
          <p className="text-xs font-medium text-secondary">Forecast horizon</p>
          <p className="mt-1 font-medium text-primary">{monthsForward} months</p>
        </div>
        <div className="stat-inset">
          <p className="text-xs font-medium text-secondary">Starting month</p>
          <p className="mt-1 font-medium text-primary">{forecastMeta.startingMonth}</p>
        </div>
      </div>

      <div className="mt-5 h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={months} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
            <CartesianGrid
              stroke={grid.stroke}
              strokeOpacity={grid.opacity}
              vertical={false}
            />
            <XAxis
              dataKey="label"
              axisLine={{ stroke: grid.stroke }}
              tickLine={false}
              tick={axis}
              label={{
                value: "Months forward",
                position: "insideBottom",
                offset: -4,
                fill: axis.fill,
                fontSize: 11,
              }}
            />
            <YAxis
              yAxisId="revenue"
              axisLine={false}
              tickLine={false}
              tick={axis}
              tickFormatter={(v) => `£${Math.round(Number(v) / 1000)}k`}
              label={{
                value: "Revenue (£)",
                angle: -90,
                position: "insideLeft",
                fill: axis.fill,
                fontSize: 11,
              }}
            />
            <YAxis
              yAxisId="customers"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={axis}
              tickFormatter={(v) => formatNumber(Number(v))}
              label={{
                value: "Customers",
                angle: 90,
                position: "insideRight",
                fill: axis.fill,
                fontSize: 11,
              }}
            />
            <Tooltip
              contentStyle={tooltip}
              formatter={(value, name) => {
                if (typeof value !== "number") return ["", ""];
                return name === "revenue"
                  ? [formatCurrency(value), "Revenue"]
                  : [formatNumber(value), "Customers"];
              }}
            />
            <Line
              yAxisId="revenue"
              type="monotone"
              dataKey="revenue"
              stroke={series.primary}
              strokeWidth={2.5}
              dot={{ r: 3, fill: "#FDFCFA", stroke: series.primary, strokeWidth: 2 }}
            />
            <Line
              yAxisId="customers"
              type="monotone"
              dataKey="customers"
              stroke={series.secondary}
              strokeWidth={2.5}
              dot={{ r: 3, fill: "#FDFCFA", stroke: series.secondary, strokeWidth: 2 }}
            />
            <Legend
              verticalAlign="bottom"
              height={40}
              iconSize={8}
              formatter={(value) => (
                <span className="text-xs font-medium text-secondary capitalize">
                  {value}
                </span>
              )}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
