"use client";

import type React from "react";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { toast, Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";
import AuthGuard from "@/components/AuthGuard";
import Header from "@/components/Header";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isAuthPage = pathName.includes("login");

  function handleBell() {
    toast.success("Welcome to 888Market");
  }

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AuthProvider>
            <AuthGuard>
              {isAuthPage ? (
                children
              ) : (
                <div
                  className="grid h-screen"
                  style={{ gridTemplateColumns: "18rem 1fr" }}
                >
                  <Sidebar />
                  <div>
                    <Header />
                    <div className="h-[calc(100vh-5rem)] overflow-scroll">
                      {children}
                    </div>
                  </div>
                </div>
              )}
              <Toaster position="bottom-right" />
            </AuthGuard>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
