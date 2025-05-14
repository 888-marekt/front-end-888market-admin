"use client";

import {
  LayoutGrid,
  ShoppingBag,
  Users,
  ShoppingCart,
  Menu,
  SettingsIcon,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export function Sidebar() {
  const pathName = usePathname();
  const activeTab = pathName.slice(pathName.indexOf("/") + 1);
  console.log(activeTab);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  };

  return (
    <div className="w-64 border-r border-gray-100 p-4 flex flex-col">
      <div className="flex items-center gap-6 mb-12">
        <div className="text-blue-600 font-bold text-xl flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
            <path
              d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
              fill="currentColor"
            />
            <path
              d="M12 13C9.33 13 7 14.67 7 17H17C17 14.67 14.67 13 12 13Z"
              fill="currentColor"
            />
          </svg>
          888Market
        </div>
      </div>

      <nav className="space-y-4 flex-1">
        <Link
          href={"/dashboard"}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
            activeTab === "dashboard"
              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
              : "text-gray-500"
          }`}
        >
          <LayoutGrid size={20} />
          <span>Dashboard</span>
        </Link>

        <Link
          href={"/products"}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
            activeTab === "products"
              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
              : "text-gray-500"
          }`}
        >
          <ShoppingBag size={20} />
          <span>Products</span>
          <ChevronDown size={16} className="ml-auto" />
        </Link>

        <Link
          href={"/flashsales"}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
            activeTab === "flashsales"
              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
              : "text-gray-500"
          }`}
        >
          <ShoppingBag size={20} />
          <span>Flash Sales</span>
        </Link>

        <Link
          href={"/customers"}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
            activeTab === "customers"
              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
              : "text-gray-500"
          }`}
        >
          <Users size={20} />
          <span>Customers</span>
        </Link>

        <Link
          href={"/orderlist"}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
            activeTab === "orderlist"
              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
              : "text-gray-500"
          }`}
        >
          <ShoppingCart size={20} />
          <span>Order List</span>
        </Link>

        <Link
          href={"/report"}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
            activeTab === "report"
              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
              : "text-gray-500"
          }`}
        >
          <Menu size={20} />
          <span>Report</span>
        </Link>

        <Link
          href={"/settings"}
          className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
            activeTab === "settings"
              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
              : "text-gray-500"
          }`}
        >
          <SettingsIcon size={20} />
          <span>Settings</span>
        </Link>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 text-gray-500 rounded-md hover:bg-gray-100"
        >
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
