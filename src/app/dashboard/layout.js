"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaUser, FaBox, FaCreditCard, FaCog } from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarCollapsed ? "w-16" : "w-64"
        } bg-teal-900 text-white shadow-md fixed inset-0 z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-all`}
      >
        <div className="px-6 py-8 text-2xl font-bold text-white flex justify-between items-center">
          <div className={`${isSidebarCollapsed ? "hidden" : "block"}`}>DataResell</div>
          <button onClick={toggleCollapse} className="text-white focus:outline-none">
            {isSidebarCollapsed ? (
              <FiMenu className="w-6 h-6" />
            ) : (
              <FiX className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="space-y-4">
          <Link
            href="/dashboard"
            className={`flex items-center px-6 py-3 text-white ${
              pathname === "/dashboard" ? "bg-teal-800" : "hover:bg-teal-700"
            }`}
          >
            <FaHome className="mr-4" />
            {/* Show text only if sidebar is expanded */}
            <span className={`${isSidebarCollapsed ? "hidden" : ""}`}>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className={`flex items-center px-6 py-3 text-white ${
              pathname === "/dashboard/profile" ? "bg-teal-800" : "hover:bg-teal-700"
            }`}
          >
            <FaUser className="mr-4" />
            <span className={`${isSidebarCollapsed ? "hidden" : ""}`}>Profile</span>
          </Link>
          <Link
            href="/dashboard/orders"
            className={`flex items-center px-6 py-3 text-white ${
              pathname === "/dashboard/orders" ? "bg-teal-800" : "hover:bg-teal-700"
            }`}
          >
            <FaBox className="mr-4" />
            <span className={`${isSidebarCollapsed ? "hidden" : ""}`}>Orders</span>
          </Link>
          <Link
            href="/dashboard/payments"
            className={`flex items-center px-6 py-3 text-white ${
              pathname === "/dashboard/payments" ? "bg-teal-800" : "hover:bg-teal-700"
            }`}
          >
            <FaCreditCard className="mr-4" />
            <span className={`${isSidebarCollapsed ? "hidden" : ""}`}>Payments</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className={`flex items-center px-6 py-3 text-white ${
              pathname === "/dashboard/settings" ? "bg-teal-800" : "hover:bg-teal-700"
            }`}
          >
            <FaCog className="mr-4" />
            <span className={`${isSidebarCollapsed ? "hidden" : ""}`}>Settings</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-8 md:ml-${isSidebarCollapsed ? "16" : "64"}`}>
        <div className="flex justify-between items-center mb-6">
          {/* Hamburger Menu for mobile */}
          <button onClick={toggleSidebar} className="text-teal-900 md:hidden focus:outline-none">
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
