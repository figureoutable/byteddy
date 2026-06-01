import type { IncomeBreakdown } from "@/lib/dummy-data";
import { formatCurrency } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

const subLabelToneClass = {
  neutral: "text-secondary",
  success: "text-success",
  warning: "text-warning",
} as const;

export function IncomeBreakdownCard({ income }: { income: IncomeBreakdown }) {
  const tone = income.subLabelTone ?? "neutral";

  const rows = [
    { label: "B2B income", value: income.b2b },
    { label: "D2C (direct to consumer)", value: income.d2c },
  ];

  return (
    <div className="card-surface border-l-[3px] border-l-primary px-4 py-[14px]">
      <p className="text-xs font-medium tracking-widest text-secondary uppercase">
        Income
      </p>

      <div className="mt-2">
        <p className="text-xs text-secondary">Total income</p>
        <p className="font-medium text-2xl text-primary">
          {formatCurrency(income.total)}
        </p>
      </div>

      <ul className="mt-3 space-y-2 border-t border-border/60 pt-3">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between gap-2 text-sm">
            <span className="text-secondary">{row.label}</span>
            <span className="font-medium text-primary">{formatCurrency(row.value)}</span>
          </li>
        ))}
      </ul>

      <p className={cn("mt-3 text-sm", subLabelToneClass[tone])}>{income.subLabel}</p>
    </div>
  );
}
