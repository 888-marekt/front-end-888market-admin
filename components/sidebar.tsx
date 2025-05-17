"use client";
import {
  LayoutGrid,
  ShoppingBag,
  Users,
  ShoppingCart,
  SettingsIcon,
  LogOut,
  ChevronDown,
  ChartNoAxesCombined,
  ChevronUp,
  HelpCircleIcon,
  HelpingHand,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import ThirdPartyConfigDropdown from "./ThirdPartConfigInSideNav";
import SideBarLinksContainer from "./SideBarLinksContainer";
import Image from "next/image";

export function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();
  const activeTab = pathName.slice(pathName.indexOf("/") + 1);

  useEffect(() => {
    if (!["subcategories", "categories"].includes(activeTab)) {
      setIsOpen(false);
    }
    if (pathName.includes("category") || pathName.includes("subcategory")) {
      setIsOpen(true);
    }
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.replace("/login");
    toast.success("Logged out successfully");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-64 border-r border-gray-100 p-4 flex flex-col h-screen overflow-scroll scrollbar-none"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex items-center gap-6 mb-12">
        <div className="text-blue-600 font-bold text-xl flex items-center">
          <Image
            className="w-10 h-10 rounded-full"
            src="./logo.jpg"
            width={10}
            height={10}
            alt="logo"
          />
          888Market
        </div>
      </div>

      <nav className="space-y-4 flex-1">
        <SideBarLinksContainer
          label="Main"
          childLinks={[
            {
              href: "dashboard",
              label: "Dashboard",
              icon: <LayoutGrid size={20} />,
            },
          ]}
          activeTab={activeTab}
        />
        <SideBarLinksContainer
          label="Product Managment"
          childLinks={[
            {
              label: "Products",
              icon: <ShoppingBag size={20} />,
              href: "products",
            },
            {
              label: "Categories",
              icon: <LayoutGrid size={20} />,
              childLinks: [
                { label: "Category", href: "categories" },
                { label: "Sub Category", href: "subcategories" },
              ],
              isOpen: isOpen,
              toggleDropdown: toggleDropdown,
            },
          ]}
          activeTab={activeTab}
        />
        <SideBarLinksContainer
          label="Order Managment"
          childLinks={[
            {
              href: "orders",
              label: "Orders",
              icon: <ShoppingCart size={20} />,
            },
          ]}
          activeTab={activeTab}
        />
        {/* customer managment */}
        <SideBarLinksContainer
          label="Customer Managment"
          activeTab={activeTab}
          childLinks={[
            {
              href: "customers",
              label: "Customers",
              icon: <Users size={20} />,
            },
          ]}
        />
        {/* Marketing */}
        <SideBarLinksContainer
          label="Marketing"
          activeTab={activeTab}
          childLinks={[
            {
              href: "marketing",
              label: "Marketing",
              icon: <ShoppingCart size={20} />,
            },
          ]}
        />

        {/* Account Settings */}
        <SideBarLinksContainer
          label="Settings"
          activeTab={activeTab}
          childLinks={[
            {
              href: "settings",
              label: "Settings",
              icon: <SettingsIcon size={20} />,
            },
          ]}
        />

        {/* Shops customization */}
        <SideBarLinksContainer
          label="Shops"
          childLinks={[
            {
              label: "Shops",
              icon: <ShoppingBag size={20} />,
              href: "shops",
            },
          ]}
          activeTab={activeTab}
        />

        {/* pages customization */}
        <div>
          <label className="px-3 text-[#8a94a6] mb-2 inline-block uppercase text-[11px] tracking-wider">
            Customizing Pages
          </label>

          <Link
            href={"/pages"}
            className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
              activeTab === "pages"
                ? "bg-blue-50 text-blue-600 border-l border-blue-600"
                : "text-gray-500"
            }`}
          >
            <LayoutGrid size={20} />
            <span>Customizing Pages</span>
          </Link>
        </div>

        {/* Help Note */}
        <div>
          <label className="px-3 text-[#8a94a6] mb-2 inline-block uppercase text-[11px] tracking-wider">
            Help and Support
          </label>

          <Link
            href={"/help-notes"}
            className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
              activeTab === "pages"
                ? "bg-blue-50 text-blue-600 border-l border-blue-600"
                : "text-gray-500"
            }`}
          >
            <HelpCircleIcon size={20} />
            <span>Help Notes</span>
          </Link>

          {/* Help Request */}
          <Link
            href={"/help-requests"}
            className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
              activeTab === "pages"
                ? "bg-blue-50 text-blue-600 border-l border-blue-600"
                : "text-gray-500"
            }`}
          >
            <HelpingHand size={20} />
            <span>Help Requests</span>
          </Link>
        </div>

        {/* 3rd Party customization */}
        <ThirdPartyConfigDropdown activeTab={activeTab} />
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
