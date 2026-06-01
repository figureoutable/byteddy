export type Period = "thisMonth" | "lastMonth";

export type StockStatus = "inStock" | "lowStock" | "reorderNow";

export interface MetricCardData {
  label: string;
  value: string;
  subLabel: string;
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
    title: "Cash flow forecast Q2 2025",
    date: "12 May 2025",
  },
  {
    id: "2",
    title: "Management accounts May 2025",
    date: "3 Jun 2025",
  },
  {
    id: "3",
    title: "Investor update June 2025",
    date: "18 Jun 2025",
  },
  {
    id: "4",
    title: "Growth strategy deck",
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

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat("en-GB").format(value);
