import type React from "react";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
