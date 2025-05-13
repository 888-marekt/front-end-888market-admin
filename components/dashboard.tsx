import { Bell, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardMetrics } from "../app/dashboard/dashboard-metrics";
import { DashboardCharts } from "../app/dashboard/dashboard-charts";
import { RecentOrders } from "../app/dashboard/recent-orders";
import { TopProducts } from "../app/dashboard/top-products";

export function Dashboard() {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-100">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Wolde!</h2>
          <p className="text-gray-500">
            Here's what's happening with your store today.
          </p>
        </div>

        <DashboardMetrics />
        <DashboardCharts />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <RecentOrders />
          </div>
          <div>
            <TopProducts />
          </div>
        </div>
      </main>
    </>
  );
}
