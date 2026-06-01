# By Teddy financial dashboard

Client-facing financial dashboard MVP for the By Teddy ecommerce brand. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, KokonutUI, and Recharts. All data is dummy/hardcoded.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app redirects to `/dashboard`.

Run on a custom port:

```bash
npm run dev -- -p 4001
```

## Pages

- `/dashboard` — metrics, revenue chart, inventory snapshot
- `/cashflow` — 12-week cash flow forecast
- `/forecaster` — revenue forecaster with scenario planning
- `/investor` — investor portal with documents and business overview

## Stack

- Next.js 14 App Router
- Tailwind CSS with By Teddy brand palette
- KokonutUI (button primitives via registry)
- Recharts for charts
- DM Sans via `next/font/google`
