"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  formatCurrency,
  operatingExpenses,
  operatingExpensesPeriod,
} from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export function OperatingExpensesCard() {
  return (
    <Card className="min-h-[320px]">
      <h2 className="font-medium text-base text-primary">Operating expenses</h2>
      <p className="mt-1 text-sm text-secondary">{operatingExpensesPeriod}</p>
      <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center">
        <div className="h-[160px] w-full md:w-2/5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={operatingExpenses}
                dataKey="value"
                nameKey="name"
                innerRadius={48}
                outerRadius={72}
                paddingAngle={2}
                stroke="#FAF8F5"
                strokeWidth={2}
              >
                {operatingExpenses.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex-1 divide-y divide-border/60">
          {operatingExpenses.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-primary">{item.name}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">
                  {item.percent}%
                </p>
                <p className="text-xs text-muted">{formatCurrency(item.value)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
