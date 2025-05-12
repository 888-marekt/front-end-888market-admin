"use client"

import { useState, useEffect } from "react"
import { LoginPage } from "./components/login-page"
import { Sidebar } from "./components/sidebar"
import { Dashboard } from "./components/dashboard"
import { Products } from "./components/products"
import { FlashSales } from "./components/flash-sales"
import { Customers } from "./components/customers"
import { OrderList } from "./components/order-list"
import { Report } from "./components/report"
import { Settings } from "./components/settings"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (email: string, password: string) => {
    if (email === "admin@gmail.com" && password === "12345678") {
      setIsAuthenticated(true)
      localStorage.setItem("isAuthenticated", "true")
      return true
    }
    return false
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "products":
        return <Products />
      case "flash-sales":
        return <FlashSales />
      case "customers":
        return <Customers />
      case "order-list":
        return <OrderList />
      case "report":
        return <Report />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  )
}
