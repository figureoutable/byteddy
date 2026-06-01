"use client";

import type { Period } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

const options: { value: Period; label: string }[] = [
  { value: "thisMonth", label: "This month" },
  { value: "lastMonth", label: "Last month" },
];

export function PeriodToggle({
  active,
  onChange,
}: {
  active: Period | null;
  onChange: (period: Period) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-border-strong bg-surface p-1 shadow-card">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm transition-colors",
            active === option.value
              ? "bg-primary text-surface"
              : "border border-transparent text-secondary hover:border-border hover:bg-page hover:text-primary"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
