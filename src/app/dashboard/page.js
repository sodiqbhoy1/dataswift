"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; // Import icons
import Profile from "./profile/page";
import Settings from "./settings/page";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <div>Welcome to the Dashboard!</div>;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content Area */}
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {renderContent()}
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bg-white shadow-md fixed bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Home Button */}
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center justify-center w-full py-2 ${
                activeTab === "home"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <FaHome className="text-2xl" />
              <span className="text-xs mt-1">Home</span>
            </button>

            {/* Profile Button */}
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center justify-center w-full py-2 ${
                activeTab === "profile"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <FaUser className="text-2xl" />
              <span className="text-xs mt-1">Profile</span>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex flex-col items-center justify-center w-full py-2 ${
                activeTab === "settings"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <FaCog className="text-2xl" />
              <span className="text-xs mt-1">Settings</span>
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex flex-col items-center justify-center w-full py-2 text-gray-700 hover:text-gray-900"
            >
              <FaSignOutAlt className="text-2xl" />
              <span className="text-xs mt-1">Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}