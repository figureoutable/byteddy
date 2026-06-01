import {
  cashflowForecast,
  cashflowScenarios,
  type CashflowWeek,
} from "@/lib/dummy-data";

export function applyCashflowScenarios(
  enabledScenarioIds: string[]
): CashflowWeek[] {
  const deltas = new Map<number, { cashIn: number; cashOut: number }>();

  for (const scenario of cashflowScenarios) {
    if (!enabledScenarioIds.includes(scenario.id)) continue;
    const existing = deltas.get(scenario.affectedWeek) ?? {
      cashIn: 0,
      cashOut: 0,
    };
    deltas.set(scenario.affectedWeek, {
      cashIn: existing.cashIn + (scenario.cashInDelta ?? 0),
      cashOut: existing.cashOut + (scenario.cashOutDelta ?? 0),
    });
  }

  const result: CashflowWeek[] = [];
  let previousClosing = cashflowForecast[0].openingBalance;

  for (let i = 0; i < cashflowForecast.length; i++) {
    const base = cashflowForecast[i];
    const delta = deltas.get(base.week) ?? { cashIn: 0, cashOut: 0 };
    const openingBalance = i === 0 ? base.openingBalance : previousClosing;
    const cashIn = base.cashIn + delta.cashIn;
    const cashOut = base.cashOut + delta.cashOut;
    const closingBalance = openingBalance + cashIn - cashOut;

    previousClosing = closingBalance;
    result.push({
      week: base.week,
      openingBalance,
      cashIn,
      cashOut,
      closingBalance,
    });
  }

  return result;
}

export function getHighlightedWeeks(enabledScenarioIds: string[]): number[] {
  return cashflowScenarios
    .filter((s) => enabledScenarioIds.includes(s.id))
    .map((s) => s.affectedWeek);
}
