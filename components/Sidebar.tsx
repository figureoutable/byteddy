"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ComingSoonBadge } from "@/components/ui/badge";

const navItems = [
  { href: "/dashboard", label: "Dashboard", disabled: false },
  { href: "/cashflow", label: "Cash flow", disabled: false },
  { href: "/forecaster", label: "Revenue forecaster", disabled: false },
  { href: "/investor", label: "Investor portal", disabled: false },
  { href: "#", label: "Inventory", disabled: true },
  { href: "#", label: "Stock analysis", disabled: true },
] as const;

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <div className="px-4 py-6">
        <p className="font-medium text-xl tracking-tight text-primary">
          By Teddy
        </p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-3 pb-6">
        {navItems.map((item) => {
          const isActive = !item.disabled && pathname === item.href;

          if (item.disabled) {
            return (
              <span
                key={item.label}
                className="flex cursor-default items-center justify-between rounded-md px-3 py-2 text-sm text-muted"
              >
                {item.label}
                <ComingSoonBadge />
              </span>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "rounded-[6px] bg-primary text-surface"
                  : "text-secondary hover:bg-page"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b-hairline border-border bg-surface px-4 py-3 lg:hidden">
        <p className="font-medium text-lg text-primary">By Teddy</p>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-md p-2 text-primary transition-colors hover:bg-page"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-30 bg-primary/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r-hairline border-border bg-surface pt-14 transition-transform lg:translate-x-0 lg:pt-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <NavContent onNavigate={() => setMobileOpen(false)} />
      </aside>
    </>
  );
}
