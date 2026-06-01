"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CashflowWeek } from "@/lib/dummy-data";
import { formatCurrency } from "@/lib/dummy-data";
import { chartTheme } from "@/lib/chart-theme";
import { Card } from "@/components/ui/card";

const { grid, axis, tooltip, series } = chartTheme;

export function ForecastChart({ weeks }: { weeks: CashflowWeek[] }) {
  const chartData = weeks.map((row) => ({
    week: `W${row.week}`,
    balance: row.closingBalance,
  }));

  return (
    <Card>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
            <CartesianGrid
              stroke={grid.stroke}
              strokeOpacity={grid.opacity}
              vertical={false}
            />
            <XAxis
              dataKey="week"
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
              contentStyle={tooltip}
              formatter={(value) =>
                typeof value === "number"
                  ? [formatCurrency(value), "Cash position"]
                  : ["", ""]
              }
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke={series.primary}
              strokeWidth={2.5}
              dot={{
                r: 4,
                fill: "#FDFCFA",
                stroke: series.primary,
                strokeWidth: 2,
              }}
              activeDot={{
                r: 5,
                fill: "#FDFCFA",
                stroke: series.primary,
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
