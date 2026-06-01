"use client";

import {
  forecastInputHints,
  forecastScenarioLabels,
  type ForecastScenarioInputs,
  type ForecastScenarioSlot,
} from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const inputFields: {
  key: keyof Pick<
    ForecastScenarioInputs,
    "marketingSpend" | "cac" | "ltv" | "churnRate"
  >;
  label: string;
  step: string;
}[] = [
  { key: "marketingSpend", label: "Marketing spend / month", step: "100" },
  { key: "cac", label: "Customer acquisition cost", step: "0.1" },
  { key: "ltv", label: "Customer lifetime value", step: "1" },
  { key: "churnRate", label: "Monthly revenue churn", step: "0.001" },
];

export function ScenarioPlanning({
  scenarioSlot,
  inputs,
  onScenarioChange,
  onInputChange,
  onSaveBase,
  onLoadBase,
  onClearBase,
}: {
  scenarioSlot: ForecastScenarioSlot;
  inputs: ForecastScenarioInputs;
  onScenarioChange: (slot: ForecastScenarioSlot) => void;
  onInputChange: (key: keyof ForecastScenarioInputs, value: number) => void;
  onSaveBase: () => void;
  onLoadBase: () => void;
  onClearBase: () => void;
}) {
  return (
    <Card>
      <h2 className="font-medium text-base text-primary">Scenario planning</h2>
      <p className="mt-1 text-sm text-secondary">
        Adjust acquisition assumptions to model future ecommerce revenue.
      </p>

      <div className="mt-5 flex flex-wrap items-end gap-3 border-b border-border pb-5">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-sm font-medium text-secondary">Scenario slot</span>
          <select
            value={scenarioSlot}
            onChange={(e) =>
              onScenarioChange(e.target.value as ForecastScenarioSlot)
            }
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-primary shadow-card transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {(Object.keys(forecastScenarioLabels) as ForecastScenarioSlot[]).map(
              (slot) => (
                <option key={slot} value={slot}>
                  {forecastScenarioLabels[slot]}
                </option>
              )
            )}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-sm font-medium text-secondary">Months forward</span>
          <input
            type="number"
            min={1}
            max={24}
            value={inputs.monthsForward}
            onChange={(e) =>
              onInputChange("monthsForward", Number(e.target.value) || 12)
            }
            className="w-24 rounded-md border-hairline border-border bg-surface px-3 py-2 text-sm text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={onSaveBase}>
            Save to base
          </Button>
          <Button type="button" variant="outline" onClick={onLoadBase}>
            Load base
          </Button>
          <Button type="button" variant="ghost" onClick={onClearBase}>
            Clear base
          </Button>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {inputFields.map((field) => (
          <label key={field.key} className="flex flex-col gap-1.5">
            <span className="text-sm text-primary">{field.label}</span>
            <input
              type="number"
              step={field.step}
              min={0}
              value={inputs[field.key]}
              onChange={(e) =>
                onInputChange(field.key, Number(e.target.value) || 0)
              }
              className="rounded-md border border-border bg-page px-3 py-2 font-medium text-lg text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <span className="text-xs leading-relaxed text-secondary">
              {forecastInputHints[field.key]}
            </span>
          </label>
        ))}
      </div>
    </Card>
  );
}
