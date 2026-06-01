"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueByMonth } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export function RevenueChart() {
  return (
    <Card className="h-full min-h-[320px]">
      <h2 className="font-medium text-base text-primary">Monthly revenue</h2>
      <p className="mt-1 text-sm text-secondary">Last 6 months</p>
      <div className="mt-4 h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueByMonth} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
              tickFormatter={(value) => `£${Math.round(value / 1000)}k`}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                background: "#FAF8F5",
                border: "0.5px solid #C8BFB0",
                borderRadius: 8,
                color: "#2C1A0E",
              }}
              formatter={(value) =>
                typeof value === "number"
                  ? [`£${value.toLocaleString("en-GB")}`, "Revenue"]
                  : ["", ""]
              }
            />
            <Bar dataKey="revenue" fill="#2C1A0E" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
