"use client";

import { useMemo, useState } from "react";
import { ForecastChart } from "@/components/cashflow/ForecastChart";
import { CashflowTable } from "@/components/cashflow/CashflowTable";
import { ScenarioToggles } from "@/components/cashflow/ScenarioToggles";
import { CashflowSummary } from "@/components/cashflow/CashflowSummary";
import {
  applyCashflowScenarios,
  getHighlightedWeeks,
} from "@/lib/cashflow-scenarios";
import { cashflowAssumptions, cashflowForecast } from "@/lib/dummy-data";
import { Card } from "@/components/ui/card";

export default function CashflowPage() {
  const [enabledScenarios, setEnabledScenarios] = useState<string[]>([]);

  const projectedWeeks = useMemo(
    () => applyCashflowScenarios(enabledScenarios),
    [enabledScenarios]
  );

  const highlightedWeeks = useMemo(
    () => getHighlightedWeeks(enabledScenarios),
    [enabledScenarios]
  );

  const baseClosing = cashflowForecast.at(-1)?.closingBalance ?? 0;
  const projectedClosing = projectedWeeks.at(-1)?.closingBalance ?? 0;

  const handleToggle = (scenarioId: string) => {
    setEnabledScenarios((current) =>
      current.includes(scenarioId)
        ? current.filter((id) => id !== scenarioId)
        : [...current, scenarioId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ScenarioToggles enabled={enabledScenarios} onToggle={handleToggle} />
        </div>
        <div className="flex flex-col gap-6 lg:col-span-3">
          <CashflowSummary
            baseClosing={baseClosing}
            projectedClosing={projectedClosing}
            activeCount={enabledScenarios.length}
          />
          <ForecastChart weeks={projectedWeeks} />
        </div>
      </div>

      <CashflowTable weeks={projectedWeeks} highlightedWeeks={highlightedWeeks} />

      <Card>
        <h2 className="font-medium text-base text-primary">Key assumptions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-secondary">
          {cashflowAssumptions.map((assumption) => (
            <li key={assumption}>{assumption}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
