"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { dashboardMonthOptions } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

export function MonthPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (monthKey: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected =
    dashboardMonthOptions.find((m) => m.key === value) ?? dashboardMonthOptions[0];

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-3 py-1.5 text-sm font-medium text-primary shadow-card transition-colors hover:bg-page"
      >
        {selected.label}
        <ChevronDown
          className={cn("h-4 w-4 text-secondary transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 max-h-64 w-36 overflow-auto rounded-md border border-border bg-surface py-1 shadow-card"
        >
          {dashboardMonthOptions.map((month) => (
            <li key={month.key} role="option" aria-selected={month.key === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(month.key);
                  setOpen(false);
                }}
                className={cn(
                  "w-full px-3 py-2 text-left text-sm transition-colors",
                  month.key === value
                    ? "bg-primary text-surface"
                    : "text-primary hover:bg-page"
                )}
              >
                {month.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
