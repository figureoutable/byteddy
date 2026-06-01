"use client";

import type { Period } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

const options: { value: Period; label: string }[] = [
  { value: "thisMonth", label: "This month" },
  { value: "lastMonth", label: "Last month" },
];

export function PeriodToggle({
  period,
  onChange,
}: {
  period: Period;
  onChange: (period: Period) => void;
}) {
  return (
    <div className="inline-flex rounded-md border-hairline border-border bg-surface p-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded px-3 py-1.5 text-sm transition-colors",
            period === option.value
              ? "bg-primary text-surface"
              : "text-secondary hover:text-primary"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
