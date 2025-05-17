"use client";

import Link from "next/link";
import React, { use } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ChildLink {
  href?: string;
  label: string;
  icon?: React.ReactNode;
  childLinks?: ChildLink[];
  isOpen?: boolean;
  toggleDropdown?: () => void;
}

interface SideBarLinkProps {
  label: string;
  childLinks: ChildLink[];
  activeTab?: string;
}

export default function SideBarLinksContainer({
  label,
  activeTab,
  childLinks,
}: SideBarLinkProps) {
  // Get the current pathname
  const pathName = usePathname();
  return (
    <div>
      <label className="px-3 text-[#8a94a6] mb-2 inline-block uppercase text-[11px] tracking-wider">
        {label}
      </label>
      {childLinks.map((childLink) =>
        childLink.href ? (
          <Link
            key={childLink.href}
            href={childLink.href}
            className={`flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
              activeTab === childLink.href
                ? "bg-blue-50 text-blue-600 border-l border-blue-600"
                : "text-gray-500"
            }`}
          >
            {childLink.icon}
            <span>{childLink.label}</span>
          </Link>
        ) : (
          <>
            <button
              onClick={childLink.toggleDropdown}
              className={`mb-3 flex w-full items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 ${
                childLink.isOpen
                  ? "bg-blue-50 text-blue-600 border-l border-blue-600"
                  : "text-gray-500"
              }`}
            >
              <div className="flex items-center gap-3">
                {childLink.icon}
                <span>{childLink.label}</span>
              </div>
              {childLink.isOpen ? (
                <ChevronUp
                  className={`h-5 w-5 ${
                    childLink.isOpen ? "text-blue-600" : ""
                  }`}
                />
              ) : (
                <ChevronDown
                  className={`h-5 w-5 ${
                    childLink.isOpen ? "text-blue-600" : ""
                  }`}
                />
              )}
            </button>
            <div className="relative ml-6 mt-1">
              {childLink.childLinks?.map((el, index) => (
                <AnimatePresence key={index}>
                  {childLink.isOpen && (
                    <>
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                          activeTab === "subcategories" ||
                          pathName.includes("sub")
                            ? "bg-gradient-to-t"
                            : "bg-gradient-to-b"
                        } bg-gradient-to-b from-blue-400 to-gray-300`}
                      />
                      {/* Category item */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="relative mt-1"
                      >
                        <div
                          className={`absolute left-0 top-1/2 w-4 h-0.5 ${
                            activeTab === "categories" ||
                            (pathName.includes("category") &&
                              !pathName.includes("sub"))
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        />
                        <Link
                          href={`/${el.href}`}
                          className={`ml-4 flex w-[calc(100%-16px)] items-center gap-3 pl-3  py-2 rounded-md hover:bg-gray-100 ${
                            activeTab === "categories" ||
                            (pathName.includes("category") &&
                              !pathName.includes("sub"))
                              ? "bg-blue-50 text-blue-600 border-l border-blue-600"
                              : "text-gray-500"
                          }`}
                        >
                          {el.label}
                        </Link>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}
