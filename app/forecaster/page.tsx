"use client";

import { useMemo, useState } from "react";
import { ScenarioPlanning } from "@/components/forecaster/ScenarioPlanning";
import { RevenueForecastChart } from "@/components/forecaster/RevenueForecastChart";
import { ProjectionSummary } from "@/components/forecaster/ProjectionSummary";
import { runForecast } from "@/lib/forecast";
import {
  forecastBaseScenario,
  forecastMeta,
  forecastScenarioPresets,
  type ForecastScenarioInputs,
  type ForecastScenarioSlot,
} from "@/lib/dummy-data";

export default function ForecasterPage() {
  const [scenarioSlot, setScenarioSlot] = useState<ForecastScenarioSlot>("base");
  const [inputs, setInputs] = useState<ForecastScenarioInputs>({
    ...forecastBaseScenario,
  });
  const [savedBase, setSavedBase] = useState<ForecastScenarioInputs | null>(null);

  const handleScenarioChange = (slot: ForecastScenarioSlot) => {
    setScenarioSlot(slot);
    setInputs({ ...forecastScenarioPresets[slot] });
  };

  const handleInputChange = (
    key: keyof ForecastScenarioInputs,
    value: number
  ) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveBase = () => setSavedBase({ ...inputs });
  const handleLoadBase = () => {
    if (savedBase) {
      setInputs({ ...savedBase });
      setScenarioSlot("base");
    } else {
      setInputs({ ...forecastBaseScenario });
      setScenarioSlot("base");
    }
  };
  const handleClearBase = () => {
    setSavedBase(null);
    setInputs({ ...forecastBaseScenario });
    setScenarioSlot("base");
  };

  const result = useMemo(
    () =>
      runForecast(
        inputs,
        forecastMeta.startingRevenue,
        forecastMeta.startingCustomers
      ),
    [inputs]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-secondary">
        <span>Prepared by {forecastMeta.preparedBy}</span>
        <span>{forecastMeta.startingMonth}</span>
      </div>

      <ScenarioPlanning
        scenarioSlot={scenarioSlot}
        inputs={inputs}
        onScenarioChange={handleScenarioChange}
        onInputChange={handleInputChange}
        onSaveBase={handleSaveBase}
        onLoadBase={handleLoadBase}
        onClearBase={handleClearBase}
      />

      <RevenueForecastChart
        months={result.months}
        monthsForward={inputs.monthsForward}
      />

      <ProjectionSummary result={result} churnRate={inputs.churnRate} />
    </div>
  );
}
