"use client";

import { usePathname } from "next/navigation";

const pageMeta: Record<string, { title: string; subtitle?: string }> = {
  "/dashboard": { title: "Dashboard" },
  "/cashflow": {
    title: "Cash flow forecast",
    subtitle: "12-week rolling forecast",
  },
  "/forecaster": {
    title: "Revenue forecaster",
    subtitle: "Scenario planning for ecommerce growth",
  },
  "/investor": {
    title: "Investor portal",
    subtitle: "Shared documents and business performance",
  },
};

export function Header() {
  const pathname = usePathname();
  const meta = pageMeta[pathname] ?? { title: "By Teddy" };

  return (
    <header className="border-b border-border bg-surface px-4 py-4 shadow-card sm:px-6">
      <h1 className="font-medium text-lg text-primary">{meta.title}</h1>
      {meta.subtitle && (
        <p className="mt-1 text-sm text-secondary">{meta.subtitle}</p>
      )}
    </header>
  );
}
