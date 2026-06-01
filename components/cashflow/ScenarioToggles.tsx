"use client";

import { cashflowScenarios } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function ScenarioToggles({
  enabled,
  onToggle,
}: {
  enabled: string[];
  onToggle: (scenarioId: string) => void;
}) {
  return (
    <Card>
      <h2 className="font-medium text-base text-primary">What-if scenarios</h2>
      <p className="mt-1 text-sm text-secondary">
        Toggle events to see how they change your 12-week cash position.
      </p>
      <ul className="mt-4 space-y-3">
        {cashflowScenarios.map((scenario) => {
          const isOn = enabled.includes(scenario.id);
          const isInflow = Boolean(scenario.cashInDelta);

          return (
            <li key={scenario.id}>
              <button
                type="button"
                onClick={() => onToggle(scenario.id)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-md border px-3 py-3 text-left transition-colors",
                  isOn
                    ? "border-primary bg-page"
                    : "border-border bg-surface hover:bg-page"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-9 shrink-0 rounded-full p-0.5 transition-colors",
                    isOn ? "bg-primary" : "bg-border"
                  )}
                  aria-hidden
                >
                  <span
                    className={cn(
                      "h-4 w-4 rounded-full bg-surface shadow-sm transition-transform",
                      isOn && "translate-x-4"
                    )}
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-primary">
                      {scenario.label}
                    </span>
                    <span
                      className={cn(
                        "rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide",
                        isInflow
                          ? "bg-success-bg text-success"
                          : "bg-danger-bg text-danger"
                      )}
                    >
                      {isInflow ? "Cash in" : "Cash out"}
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-secondary">
                    {scenario.description}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
