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
import { cashflowForecast } from "@/lib/dummy-data";
import { formatCurrency } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

const chartData = cashflowForecast.map((row) => ({
  week: `W${row.week}`,
  balance: row.closingBalance,
}));

export function ForecastChart() {
  return (
    <Card>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
            <CartesianGrid stroke="transparent" />
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9A8878", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9A8878", fontSize: 12 }}
              tickFormatter={(value) => `£${Math.round(value / 1000)}k`}
            />
            <Tooltip
              contentStyle={{
                background: "#FAF8F5",
                border: "0.5px solid #C8BFB0",
                borderRadius: 8,
                color: "#2C1A0E",
              }}
              formatter={(value) =>
                typeof value === "number"
                  ? [formatCurrency(value), "Cash position"]
                  : ["", ""]
              }
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2C1A0E"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "#FAF8F5",
                stroke: "#2C1A0E",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 5,
                fill: "#FAF8F5",
                stroke: "#2C1A0E",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
