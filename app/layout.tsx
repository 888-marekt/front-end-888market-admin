import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "888Market - Report Analysis Dashboard",
  description: "A modern dashboard for report analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid" style={{ gridTemplateColumns: "18rem 1fr" }}>
            <Sidebar />
            <>{children}</>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
