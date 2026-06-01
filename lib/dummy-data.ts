export type Period = "thisMonth" | "lastMonth";

export type StockStatus = "inStock" | "lowStock" | "reorderNow";

export type SubLabelTone = "neutral" | "success" | "warning";

export interface MetricCardData {
  label: string;
  value: string;
  subLabel: string;
  subLabelTone?: SubLabelTone;
  accent?: boolean;
}

export interface DashboardMetrics {
  income: MetricCardData;
  profit: MetricCardData;
  tax: MetricCardData;
  daysTillTax: MetricCardData;
}

export interface RevenueMonth {
  month: string;
  revenue: number;
  label: string;
}

export interface InventorySku {
  name: string;
  units: number;
  status: StockStatus;
}

export interface OrderVolume {
  thisMonth: number;
  lastMonth: number;
}

export interface CashflowWeek {
  week: number;
  openingBalance: number;
  cashIn: number;
  cashOut: number;
  closingBalance: number;
}

export interface InvestorDocument {
  id: string;
  title: string;
  date: string;
}

export interface InvestorStat {
  label: string;
  value: string;
}

export interface BusinessMetric {
  label: string;
  value: string;
}

export const dashboardMetrics: Record<Period, DashboardMetrics> = {
  thisMonth: {
    income: {
      label: "Income",
      value: "£102,400",
      subLabel: "+4.5% vs last month",
      subLabelTone: "success",
      accent: true,
    },
    profit: {
      label: "Profit",
      value: "£28,670",
      subLabel: "28% margin",
    },
    tax: {
      label: "Est. tax payable",
      value: "£6,880",
      subLabel: "CT + VAT combined",
    },
    daysTillTax: {
      label: "Days till tax due",
      value: "47",
      subLabel: "VAT due 7 Jul",
    },
  },
  lastMonth: {
    income: {
      label: "Income",
      value: "£97,800",
      subLabel: "+2.1% vs prior month",
      subLabelTone: "success",
      accent: true,
    },
    profit: {
      label: "Profit",
      value: "£26,400",
      subLabel: "27% margin",
    },
    tax: {
      label: "Est. tax payable",
      value: "£6,336",
      subLabel: "CT + VAT combined",
    },
    daysTillTax: {
      label: "Days till tax due",
      value: "74",
      subLabel: "CT due 1 Sep",
    },
  },
};

export interface EcommerceKpiSet {
  primary: MetricCardData[];
  secondary: MetricCardData[];
}

export interface SalesMonth {
  month: string;
  grossSales: number;
  returns: number;
  netSales: number;
}

export interface ChannelSale {
  name: string;
  value: number;
  percent: number;
  color: string;
}

export interface ExpenseCategory {
  name: string;
  value: number;
  percent: number;
  color: string;
}

export interface StockLevel {
  name: string;
  units: number;
  capacity: number;
  status: StockStatus;
}

export const dashboardPeriodLabels: Record<Period, string> = {
  thisMonth: "Jun-26",
  lastMonth: "May-26",
};

export const ecommerceKpis: Record<Period, EcommerceKpiSet> = {
  thisMonth: {
    primary: [
      {
        label: "Total revenue",
        value: "£102,400",
        subLabel: "+4.5% vs last month",
        subLabelTone: "success",
        accent: true,
      },
      {
        label: "Average order value",
        value: "£64.20",
        subLabel: "+£2.10 vs last month",
        subLabelTone: "success",
      },
      {
        label: "Conversion rate",
        value: "3.4%",
        subLabel: "Target: 3.2%",
        subLabelTone: "success",
      },
      {
        label: "Customer acquisition cost",
        value: "£11.80",
        subLabel: "Blended paid + organic",
      },
    ],
    secondary: [
      {
        label: "Net profit margin",
        value: "28.0%",
        subLabel: "After returns and ads",
      },
      {
        label: "Return rate",
        value: "6.2%",
        subLabel: "Target: <8%",
        subLabelTone: "success",
      },
      {
        label: "Total orders",
        value: "1,847",
        subLabel: "+4.8% vs last month",
        subLabelTone: "success",
      },
      {
        label: "Ad spend (ROAS)",
        value: "4.6x",
        subLabel: "£8,200 spend this month",
      },
    ],
  },
  lastMonth: {
    primary: [
      {
        label: "Total revenue",
        value: "£97,800",
        subLabel: "+2.1% vs prior month",
        subLabelTone: "success",
        accent: true,
      },
      {
        label: "Average order value",
        value: "£62.10",
        subLabel: "Stable basket size",
      },
      {
        label: "Conversion rate",
        value: "3.1%",
        subLabel: "Target: 3.2%",
        subLabelTone: "warning",
      },
      {
        label: "Customer acquisition cost",
        value: "£12.40",
        subLabel: "Blended paid + organic",
      },
    ],
    secondary: [
      {
        label: "Net profit margin",
        value: "27.0%",
        subLabel: "After returns and ads",
      },
      {
        label: "Return rate",
        value: "6.8%",
        subLabel: "Target: <8%",
        subLabelTone: "success",
      },
      {
        label: "Total orders",
        value: "1,762",
        subLabel: "+2.4% vs prior month",
        subLabelTone: "success",
      },
      {
        label: "Ad spend (ROAS)",
        value: "4.2x",
        subLabel: "£7,950 spend last month",
      },
    ],
  },
};

export const salesPerformance12Months: SalesMonth[] = [
  { month: "Jul", grossSales: 72000, returns: 4200, netSales: 67800 },
  { month: "Aug", grossSales: 76000, returns: 4800, netSales: 71200 },
  { month: "Sep", grossSales: 81000, returns: 5100, netSales: 75900 },
  { month: "Oct", grossSales: 88000, returns: 5600, netSales: 82400 },
  { month: "Nov", grossSales: 118000, returns: 9200, netSales: 108800 },
  { month: "Dec", grossSales: 105000, returns: 7800, netSales: 97200 },
  { month: "Jan", grossSales: 78000, returns: 4900, netSales: 73100 },
  { month: "Feb", grossSales: 84000, returns: 5200, netSales: 78800 },
  { month: "Mar", grossSales: 91000, returns: 5800, netSales: 85200 },
  { month: "Apr", grossSales: 98000, returns: 6100, netSales: 91900 },
  { month: "May", grossSales: 102000, returns: 6400, netSales: 95600 },
  { month: "Jun", grossSales: 108500, returns: 6100, netSales: 102400 },
];

export const salesEventMarker = {
  month: "Nov",
  label: "Black Friday sale",
};

export const salesByChannel: ChannelSale[] = [
  { name: "Shopify store", value: 71680, percent: 70, color: "#2C1A0E" },
  { name: "Instagram shop", value: 20480, percent: 20, color: "#7A6A5A" },
  { name: "Wholesale", value: 10240, percent: 10, color: "#C8BFB0" },
];

export const operatingExpensesPeriod = "Jun-26";

export const operatingExpenses: ExpenseCategory[] = [
  { name: "COGS", value: 49152, percent: 48, color: "#2C1A0E" },
  { name: "Shipping & fulfillment", value: 14336, percent: 14, color: "#5C4A3A" },
  { name: "Marketing spend", value: 8200, percent: 8, color: "#7A6A5A" },
  { name: "Platform & G&A", value: 30720, percent: 30, color: "#9A8878" },
];

export const inventoryStockLevels: StockLevel[] = [
  { name: "Classic teddy bear", units: 342, capacity: 400, status: "inStock" },
  { name: "Linen gift set", units: 28, capacity: 80, status: "lowStock" },
  { name: "Personalised embroidery kit", units: 156, capacity: 180, status: "inStock" },
  { name: "Holiday stocking bundle", units: 0, capacity: 60, status: "reorderNow" },
];

export const revenueByMonth: RevenueMonth[] = [
  { month: "Jan", revenue: 73000, label: "£73k" },
  { month: "Feb", revenue: 81000, label: "£81k" },
  { month: "Mar", revenue: 89000, label: "£89k" },
  { month: "Apr", revenue: 96000, label: "£96k" },
  { month: "May", revenue: 102000, label: "£102k" },
  { month: "Jun", revenue: 98000, label: "£98k" },
];

export const inventorySkus: InventorySku[] = [
  { name: "Classic teddy bear", units: 342, status: "inStock" },
  { name: "Linen gift set", units: 28, status: "lowStock" },
  { name: "Personalised embroidery kit", units: 156, status: "inStock" },
  { name: "Holiday stocking bundle", units: 0, status: "reorderNow" },
];

export const orderVolume: OrderVolume = {
  thisMonth: 1847,
  lastMonth: 1762,
};

export const cashflowForecast: CashflowWeek[] = [
  { week: 1, openingBalance: 48000, cashIn: 22400, cashOut: 18600, closingBalance: 51800 },
  { week: 2, openingBalance: 51800, cashIn: 19800, cashOut: 24100, closingBalance: 47500 },
  { week: 3, openingBalance: 47500, cashIn: 25600, cashOut: 19200, closingBalance: 53900 },
  { week: 4, openingBalance: 53900, cashIn: 21200, cashOut: 31800, closingBalance: 43300 },
  { week: 5, openingBalance: 43300, cashIn: 28900, cashOut: 20400, closingBalance: 51800 },
  { week: 6, openingBalance: 51800, cashIn: 23100, cashOut: 27600, closingBalance: 47300 },
  { week: 7, openingBalance: 47300, cashIn: 26700, cashOut: 22100, closingBalance: 51900 },
  { week: 8, openingBalance: 51900, cashIn: 24300, cashOut: 35200, closingBalance: 41000 },
  { week: 9, openingBalance: 41000, cashIn: 30100, cashOut: 21800, closingBalance: 49300 },
  { week: 10, openingBalance: 49300, cashIn: 27600, cashOut: 23900, closingBalance: 53000 },
  { week: 11, openingBalance: 53000, cashIn: 25400, cashOut: 28700, closingBalance: 49700 },
  { week: 12, openingBalance: 49700, cashIn: 31200, cashOut: 22400, closingBalance: 58500 },
];

export const cashflowAssumptions: string[] = [
  "Average order value £58 across DTC and marketplace channels",
  "COGS at 52% of net revenue, aligned with current supplier pricing",
  "Monthly ad spend £8,200 on Meta and Google, paid weekly",
  "Supplier payment terms 30 days net on inventory purchases",
];

export const investorStats: InvestorStat[] = [
  { label: "Total revenue YTD", value: "£587,400" },
  { label: "Gross margin", value: "28%" },
  { label: "MoM growth", value: "+4.5%" },
];

export const investorDocuments: InvestorDocument[] = [
  {
    id: "1",
    title: "By Teddy cash flow forecast Q2 2025",
    date: "12 May 2025",
  },
  {
    id: "2",
    title: "Management accounts May 2025",
    date: "3 Jun 2025",
  },
  {
    id: "3",
    title: "By Teddy investor update June 2025",
    date: "18 Jun 2025",
  },
  {
    id: "4",
    title: "By Teddy growth strategy deck",
    date: "1 Apr 2025",
  },
];

export const businessOverview =
  "By Teddy is a UK-based ecommerce brand crafting thoughtful gifts and keepsakes. Founded in 2021, the business sells direct-to-consumer through its Shopify store and selected retail partners, with a focus on sustainable materials and personalisation.";

export const businessMetrics: BusinessMetric[] = [
  { label: "Founded", value: "2021" },
  { label: "Revenue run rate", value: "£1.2m" },
  { label: "Units sold YTD", value: "9,840" },
  { label: "Markets", value: "UK and EU" },
];

export const stockStatusLabels: Record<StockStatus, string> = {
  inStock: "In stock",
  lowStock: "Low stock",
  reorderNow: "Reorder now",
};

export interface ForecastScenarioInputs {
  marketingSpend: number;
  cac: number;
  ltv: number;
  churnRate: number;
  monthsForward: number;
}

export type ForecastScenarioSlot = "base" | "upside" | "conservative";

export const forecastMeta = {
  startingRevenue: 102400,
  startingCustomers: 1847,
  startingMonth: "Jun-26",
  preparedBy: "Figures & finance Ltd",
};

export const forecastScenarioLabels: Record<ForecastScenarioSlot, string> = {
  base: "Base case",
  upside: "Upside",
  conservative: "Conservative",
};

export const forecastScenarioPresets: Record<
  ForecastScenarioSlot,
  ForecastScenarioInputs
> = {
  base: {
    marketingSpend: 8200,
    cac: 11.8,
    ltv: 186,
    churnRate: 0.062,
    monthsForward: 12,
  },
  upside: {
    marketingSpend: 11200,
    cac: 10.5,
    ltv: 210,
    churnRate: 0.055,
    monthsForward: 12,
  },
  conservative: {
    marketingSpend: 6400,
    cac: 13.2,
    ltv: 168,
    churnRate: 0.072,
    monthsForward: 12,
  },
};

export const forecastBaseScenario: ForecastScenarioInputs = {
  ...forecastScenarioPresets.base,
};

export const forecastInputHints = {
  marketingSpend: "Planned monthly acquisition budget across paid and creator channels.",
  cac: "Blended cost to acquire one new customer from paid media.",
  ltv: "Assumed gross lifetime value per acquired customer over 18 months.",
  churnRate:
    "Share of monthly revenue lost to returns, cancellations, and customer drop-off.",
};

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat("en-GB").format(value);
