"use client";

import type React from "react";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { toast, Toaster } from "sonner";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isAuth = pathName.includes("login");

  function handleBell() {
    toast.success("Welcome to 888Market");
  }

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {isAuth ? (
            children
          ) : (
            <div
              className="grid h-screen"
              style={{ gridTemplateColumns: "18rem 1fr" }}
            >
              <Sidebar />
              <div>
                <header className="flex items-center justify-end p-4 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <Search size={20} />
                    </button>
                    <button
                      className="p-2 text-gray-500 hover:text-gray-700 relative"
                      onClick={handleBell}
                    >
                      <Bell size={20} />
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          className="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                </header>
                <div className="h-screen overflow-scroll">{children}</div>
              </div>
            </div>
          )}
          <Toaster position="bottom-right" />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
