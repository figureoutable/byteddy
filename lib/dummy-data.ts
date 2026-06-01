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

export interface IncomeBreakdown {
  total: number;
  b2b: number;
  d2c: number;
  subLabel: string;
  subLabelTone?: SubLabelTone;
}

export interface DashboardMonthData {
  label: string;
  income: IncomeBreakdown;
  profit: MetricCardData;
  tax: MetricCardData;
  daysTillTax: MetricCardData;
  ecommerce: EcommerceKpiSet;
}

export const DASHBOARD_CURRENT_MONTH = "2026-06";
export const DASHBOARD_PREVIOUS_MONTH = "2026-05";

export const dashboardMonthOptions = [
  { key: "2026-06", label: "Jun-26" },
  { key: "2026-05", label: "May-26" },
  { key: "2026-04", label: "Apr-26" },
  { key: "2026-03", label: "Mar-26" },
  { key: "2026-02", label: "Feb-26" },
  { key: "2026-01", label: "Jan-26" },
  { key: "2025-12", label: "Dec-25" },
  { key: "2025-11", label: "Nov-25" },
  { key: "2025-10", label: "Oct-25" },
  { key: "2025-09", label: "Sep-25" },
  { key: "2025-08", label: "Aug-25" },
  { key: "2025-07", label: "Jul-25" },
] as const;

export type DashboardMonthKey = (typeof dashboardMonthOptions)[number]["key"];

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

const ecommerceJun26: EcommerceKpiSet = {
    primary: [
      {
        label: "D2C orders",
        value: "1,324",
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
};

const ecommerceMay26: EcommerceKpiSet = {
  primary: [
    {
      label: "D2C orders",
      value: "1,266",
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
};

export const dashboardByMonth: Record<string, DashboardMonthData> = {
  "2026-06": {
    label: "Jun-26",
    income: {
      total: 102400,
      b2b: 28600,
      d2c: 73800,
      subLabel: "+4.5% vs last month",
      subLabelTone: "success",
    },
    profit: { label: "Profit", value: "£28,670", subLabel: "28% margin" },
    tax: { label: "Est. tax payable", value: "£6,880", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "47", subLabel: "VAT due 7 Jul" },
    ecommerce: ecommerceJun26,
  },
  "2026-05": {
    label: "May-26",
    income: {
      total: 97800,
      b2b: 26400,
      d2c: 71400,
      subLabel: "+2.1% vs prior month",
      subLabelTone: "success",
    },
    profit: { label: "Profit", value: "£26,400", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£6,336", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "74", subLabel: "CT due 1 Sep" },
    ecommerce: ecommerceMay26,
  },
  "2026-04": {
    label: "Apr-26",
    income: {
      total: 95600,
      b2b: 25100,
      d2c: 70500,
      subLabel: "+3.8% vs prior month",
      subLabelTone: "success",
    },
    profit: { label: "Profit", value: "£25,900", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£6,180", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "82", subLabel: "VAT due 7 Jul" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [
        { ...ecommerceMay26.primary[0], value: "1,239", subLabel: "+3.8% vs prior month" },
        { ...ecommerceMay26.primary[1], value: "£61.40" },
        { ...ecommerceMay26.primary[2], value: "3.0%" },
        { ...ecommerceMay26.primary[3], value: "£12.10" },
      ],
      secondary: [
        { ...ecommerceMay26.secondary[0], value: "27.1%" },
        { ...ecommerceMay26.secondary[1], value: "6.9%" },
        { ...ecommerceMay26.secondary[2], value: "1,721" },
        { ...ecommerceMay26.secondary[3], value: "4.3x", subLabel: "£7,800 spend this month" },
      ],
    },
  },
  "2026-03": {
    label: "Mar-26",
    income: {
      total: 89200,
      b2b: 22800,
      d2c: 66400,
      subLabel: "+1.9% vs prior month",
      subLabelTone: "success",
    },
    profit: { label: "Profit", value: "£24,100", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£5,920", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "90", subLabel: "VAT due 7 Jul" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [
        { ...ecommerceMay26.primary[0], value: "1,154", accent: true },
        { ...ecommerceMay26.primary[1], value: "£60.80" },
        { ...ecommerceMay26.primary[2], value: "2.9%", subLabelTone: "warning" },
        { ...ecommerceMay26.primary[3], value: "£12.60" },
      ],
      secondary: [
        { ...ecommerceMay26.secondary[0], value: "27.0%" },
        { ...ecommerceMay26.secondary[2], value: "1,654" },
        { ...ecommerceMay26.secondary[3], value: "4.1x", subLabel: "£7,600 spend this month" },
        ecommerceMay26.secondary[1],
      ],
    },
  },
  "2026-02": {
    label: "Feb-26",
    income: {
      total: 81800,
      b2b: 20400,
      d2c: 61400,
      subLabel: "+2.4% vs prior month",
      subLabelTone: "success",
    },
    profit: { label: "Profit", value: "£22,050", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£5,480", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "98", subLabel: "CT due 1 Sep" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [
        { ...ecommerceMay26.primary[0], value: "1,058", accent: true },
        { ...ecommerceMay26.primary[1], value: "£59.90" },
        ecommerceMay26.primary[2],
        ecommerceMay26.primary[3],
      ],
      secondary: [
        ecommerceMay26.secondary[0],
        ecommerceMay26.secondary[1],
        { ...ecommerceMay26.secondary[2], value: "1,598" },
        { ...ecommerceMay26.secondary[3], value: "4.0x", subLabel: "£7,400 spend this month" },
      ],
    },
  },
  "2026-01": {
    label: "Jan-26",
    income: {
      total: 73100,
      b2b: 18200,
      d2c: 54900,
      subLabel: "Post-holiday normalisation",
    },
    profit: { label: "Profit", value: "£19,720", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£4,980", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "106", subLabel: "VAT due 7 Jul" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [
        { ...ecommerceMay26.primary[0], value: "936", accent: true },
        { ...ecommerceMay26.primary[1], value: "£58.40" },
        { ...ecommerceMay26.primary[2], value: "2.8%", subLabelTone: "warning" },
        ecommerceMay26.primary[3],
      ],
      secondary: [
        ecommerceMay26.secondary[0],
        { ...ecommerceMay26.secondary[1], value: "7.1%" },
        { ...ecommerceMay26.secondary[2], value: "1,412" },
        { ...ecommerceMay26.secondary[3], value: "3.8x", subLabel: "£7,100 spend this month" },
      ],
    },
  },
  "2025-12": {
    label: "Dec-25",
    income: {
      total: 97200,
      b2b: 24100,
      d2c: 73100,
      subLabel: "Holiday peak",
      subLabelTone: "success",
    },
    profit: { label: "Profit", value: "£26,820", subLabel: "28% margin" },
    tax: { label: "Est. tax payable", value: "£6,240", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "114", subLabel: "CT due 1 Sep" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [
        { ...ecommerceMay26.primary[0], value: "1,244", accent: true, subLabel: "Seasonal uplift" },
        { ...ecommerceMay26.primary[1], value: "£63.10" },
        { ...ecommerceMay26.primary[2], value: "3.6%", subLabelTone: "success" },
        ecommerceMay26.primary[3],
      ],
      secondary: [
        { ...ecommerceMay26.secondary[0], value: "27.6%" },
        ecommerceMay26.secondary[1],
        { ...ecommerceMay26.secondary[2], value: "1,698" },
        { ...ecommerceMay26.secondary[3], value: "4.5x", subLabel: "£8,100 spend this month" },
      ],
    },
  },
  "2025-11": {
    label: "Nov-25",
    income: {
      total: 108800,
      b2b: 30200,
      d2c: 78600,
      subLabel: "Black Friday uplift",
      subLabelTone: "success",
    },
    profit: { label: "Profit", value: "£30,460", subLabel: "28% margin" },
    tax: { label: "Est. tax payable", value: "£6,520", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "122", subLabel: "VAT due 7 Jul" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [
        {
          ...ecommerceMay26.primary[0],
          value: "1,392",
          accent: true,
          subLabel: "Black Friday peak",
        },
        { ...ecommerceMay26.primary[1], value: "£65.80" },
        { ...ecommerceMay26.primary[2], value: "3.8%", subLabelTone: "success" },
        { ...ecommerceMay26.primary[3], value: "£11.20" },
      ],
      secondary: [
        { ...ecommerceMay26.secondary[0], value: "28.0%" },
        ecommerceMay26.secondary[1],
        { ...ecommerceMay26.secondary[2], value: "1,912" },
        { ...ecommerceMay26.secondary[3], value: "4.8x", subLabel: "£8,800 spend this month" },
      ],
    },
  },
  "2025-10": {
    label: "Oct-25",
    income: { total: 82400, b2b: 20600, d2c: 61800, subLabel: "+1.2% vs prior month" },
    profit: { label: "Profit", value: "£22,260", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£5,540", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "130", subLabel: "VAT due 7 Jul" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [{ ...ecommerceMay26.primary[0], value: "1,054", accent: true }],
      secondary: ecommerceMay26.secondary,
    },
  },
  "2025-09": {
    label: "Sep-25",
    income: { total: 75900, b2b: 18900, d2c: 57000, subLabel: "+0.8% vs prior month" },
    profit: { label: "Profit", value: "£20,490", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£5,120", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "138", subLabel: "CT due 1 Sep" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [{ ...ecommerceMay26.primary[0], value: "970", accent: true }],
      secondary: ecommerceMay26.secondary,
    },
  },
  "2025-08": {
    label: "Aug-25",
    income: { total: 71200, b2b: 17400, d2c: 53800, subLabel: "Summer slowdown" },
    profit: { label: "Profit", value: "£19,220", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£4,860", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "146", subLabel: "VAT due 7 Jul" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [{ ...ecommerceMay26.primary[0], value: "910", accent: true }],
      secondary: ecommerceMay26.secondary,
    },
  },
  "2025-07": {
    label: "Jul-25",
    income: { total: 67800, b2b: 16200, d2c: 51600, subLabel: "Baseline month" },
    profit: { label: "Profit", value: "£18,300", subLabel: "27% margin" },
    tax: { label: "Est. tax payable", value: "£4,620", subLabel: "CT + VAT combined" },
    daysTillTax: { label: "Days till tax due", value: "154", subLabel: "VAT due 7 Jul" },
    ecommerce: {
      ...ecommerceMay26,
      primary: [{ ...ecommerceMay26.primary[0], value: "867", accent: true }],
      secondary: ecommerceMay26.secondary,
    },
  },
};

export function getDashboardMonth(monthKey: string): DashboardMonthData {
  return (
    dashboardByMonth[monthKey] ?? dashboardByMonth[DASHBOARD_CURRENT_MONTH]
  );
}

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
  { name: "Instagram shop", value: 20480, percent: 20, color: "#6B5344" },
  { name: "Wholesale", value: 10240, percent: 10, color: "#A89484" },
];

export const operatingExpensesPeriod = "Jun-26";

export const operatingExpenses: ExpenseCategory[] = [
  { name: "COGS", value: 49152, percent: 48, color: "#2C1A0E" },
  { name: "Shipping & fulfillment", value: 14336, percent: 14, color: "#6B5344" },
  { name: "Marketing spend", value: 8200, percent: 8, color: "#8A7566" },
  { name: "Platform & G&A", value: 30720, percent: 30, color: "#B8AA9A" },
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

export interface CashflowScenario {
  id: string;
  label: string;
  description: string;
  affectedWeek: number;
  cashInDelta?: number;
  cashOutDelta?: number;
}

export const cashflowScenarios: CashflowScenario[] = [
  {
    id: "stock-purchase-w4",
    label: "Stock purchase in week 4",
    description: "Place a £12,000 inventory order with your main supplier",
    affectedWeek: 4,
    cashOutDelta: 12000,
  },
  {
    id: "wholesale-deal-w7",
    label: "Wholesale deal in week 7",
    description: "An £18,500 B2B order lands and pays on receipt",
    affectedWeek: 7,
    cashInDelta: 18500,
  },
  {
    id: "seasonal-restock-w8",
    label: "Seasonal restock in week 8",
    description: "Additional £9,200 stock payment for holiday build",
    affectedWeek: 8,
    cashOutDelta: 9200,
  },
  {
    id: "retail-partner-w10",
    label: "Retail partner PO in week 10",
    description: "First department store purchase order (£14,000)",
    affectedWeek: 10,
    cashInDelta: 14000,
  },
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
  "By Teddy is a UK-based ecommerce brand crafting thoughtful gifts and keepsakes. Founded in 2024, the business sells direct-to-consumer through its Shopify store and selected retail partners, with a focus on sustainable materials and personalisation.";

export const businessMetrics: BusinessMetric[] = [
  { label: "Founded", value: "2024" },
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
