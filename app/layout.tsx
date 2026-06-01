import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "By Teddy — Financial dashboard",
  description: "Client-facing financial dashboard for By Teddy ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans`}>
        <div className="min-h-screen bg-page">
          <Sidebar />
          <div className="lg:pl-64">
            <div className="pt-14 lg:pt-0">
              <Header />
              <main className="px-4 py-6 sm:px-6">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
