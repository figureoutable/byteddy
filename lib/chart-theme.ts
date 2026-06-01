/** Shared Recharts styling — warm palette with stronger contrast */
export const chartTheme = {
  grid: { stroke: "#B8AA9A", opacity: 0.5 },
  axis: { fill: "#6B5B4E", fontSize: 12 },
  tooltip: {
    background: "#FDFCFA",
    border: "1px solid #B8AA9A",
    borderRadius: 8,
    color: "#2C1A0E",
  },
  series: {
    primary: "#2C1A0E",
    secondary: "#6B5344",
    tertiary: "#A89484",
    danger: "#993C1D",
    muted: "#8A7A6C",
  },
} as const;
