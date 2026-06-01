import type { ForecastScenarioInputs } from "@/lib/dummy-data";

export interface ForecastMonth {
  label: string;
  revenue: number;
  customers: number;
}

export interface ForecastResult {
  months: ForecastMonth[];
  startingRevenue: number;
  startingCustomers: number;
  endingRevenue: number;
  endingCustomers: number;
  projectedAnnualRevenue: number;
  ltvCacRatio: number;
}

export function runForecast(
  inputs: ForecastScenarioInputs,
  startingRevenue: number,
  startingCustomers: number
): ForecastResult {
  let revenue = startingRevenue;
  let customers = startingCustomers;
  const months: ForecastMonth[] = [];
  const monthlyValuePerCustomer = inputs.ltv / 18;

  for (let i = 1; i <= inputs.monthsForward; i++) {
    const newCustomers = inputs.marketingSpend / inputs.cac;
    const churnedRevenue = revenue * inputs.churnRate;
    const acquisitionRevenue = newCustomers * monthlyValuePerCustomer;

    revenue = revenue - churnedRevenue + acquisitionRevenue;
    customers = customers * (1 - inputs.churnRate) + newCustomers;

    months.push({
      label: `F+${i}`,
      revenue: Math.round(revenue),
      customers: Math.round(customers),
    });
  }

  const endingRevenue = months.at(-1)?.revenue ?? startingRevenue;
  const endingCustomers = months.at(-1)?.customers ?? startingCustomers;

  return {
    months,
    startingRevenue,
    startingCustomers,
    endingRevenue,
    endingCustomers,
    projectedAnnualRevenue: endingRevenue * 12,
    ltvCacRatio: inputs.cac > 0 ? inputs.ltv / inputs.cac : 0,
  };
}
