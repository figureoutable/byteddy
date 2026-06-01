"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { formatCurrency, salesByChannel } from "@/lib/dummy-data";
import { chartTheme } from "@/lib/chart-theme";
import { Card } from "@/components/ui/card";

export function SalesByChannelChart() {
  return (
    <Card className="min-h-[360px]">
      <h2 className="font-medium text-base">Sales by channel</h2>
      <p className="mt-1 text-sm text-secondary">This month mix</p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="h-[180px] w-full sm:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesByChannel}
                dataKey="value"
                nameKey="name"
                innerRadius={52}
                outerRadius={78}
                paddingAngle={3}
                stroke="#FDFCFA"
                strokeWidth={2}
              >
                {salesByChannel.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={chartTheme.tooltip} formatter={(value) =>
                  typeof value === "number"
                    ? [formatCurrency(value), "Revenue"]
                    : ["", ""]
                } />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex-1 space-y-3">
          {salesByChannel.map((channel) => (
            <li
              key={channel.name}
              className="flex items-start justify-between gap-2 border-b border-border/50 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: channel.color }}
                />
                <span className="text-sm font-medium text-primary">{channel.name}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">
                  {formatCurrency(channel.value)}
                </p>
                <p className="text-xs text-secondary">{channel.percent}%</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
