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
import { Card } from "@/components/ui/card";

export function RevenueForecastChart({
  months,
  monthsForward,
}: {
  months: ForecastMonth[];
  monthsForward: number;
}) {
  return (
    <Card>
      <h2 className="font-medium text-base text-primary">
        Historical + projected revenue
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border-hairline border-border bg-page px-3 py-2">
          <p className="text-xs text-muted">Current revenue (starting base)</p>
          <p className="mt-1 font-medium text-primary">
            {formatCurrency(forecastMeta.startingRevenue)}
          </p>
        </div>
        <div className="rounded-md border-hairline border-border bg-page px-3 py-2">
          <p className="text-xs text-muted">Forecast horizon</p>
          <p className="mt-1 font-medium text-primary">{monthsForward} months</p>
        </div>
        <div className="rounded-md border-hairline border-border bg-page px-3 py-2">
          <p className="text-xs text-muted">Starting month</p>
          <p className="mt-1 font-medium text-primary">{forecastMeta.startingMonth}</p>
        </div>
      </div>

      <div className="mt-5 h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={months} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#C8BFB0" strokeOpacity={0.25} vertical={false} />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9A8878", fontSize: 12 }}
              label={{
                value: "Months forward",
                position: "insideBottom",
                offset: -4,
                fill: "#9A8878",
                fontSize: 11,
              }}
            />
            <YAxis
              yAxisId="revenue"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9A8878", fontSize: 12 }}
              tickFormatter={(v) => `£${Math.round(Number(v) / 1000)}k`}
              label={{
                value: "Revenue (£)",
                angle: -90,
                position: "insideLeft",
                fill: "#9A8878",
                fontSize: 11,
              }}
            />
            <YAxis
              yAxisId="customers"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9A8878", fontSize: 12 }}
              tickFormatter={(v) => formatNumber(Number(v))}
              label={{
                value: "Customers",
                angle: 90,
                position: "insideRight",
                fill: "#9A8878",
                fontSize: 11,
              }}
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
                return name === "revenue"
                  ? [formatCurrency(value), "Revenue"]
                  : [formatNumber(value), "Customers"];
              }}
            />
            <Line
              yAxisId="revenue"
              type="monotone"
              dataKey="revenue"
              stroke="#2C1A0E"
              strokeWidth={2}
              dot={{ r: 3, fill: "#FAF8F5", stroke: "#2C1A0E", strokeWidth: 2 }}
            />
            <Line
              yAxisId="customers"
              type="monotone"
              dataKey="customers"
              stroke="#7A6A5A"
              strokeWidth={2}
              dot={{ r: 3, fill: "#FAF8F5", stroke: "#7A6A5A", strokeWidth: 2 }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-xs text-secondary capitalize">{value}</span>
              )}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
