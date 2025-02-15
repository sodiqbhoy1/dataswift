"use client"
import { useState } from "react";
import { FaUser, FaCreditCard, FaCog, FaBell, FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Settings() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-teal-900 mb-6">Settings</h1>

      {/* Settings Sections */}
      <div className="space-y-4">
        {/* Profile Settings */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("profile")}
          >
            <div className="flex items-center">
              <FaUser className="w-6 h-6 text-teal-600 mr-4" />
              <span className="text-lg font-semibold">Profile Settings</span>
            </div>
            <IoIosArrowForward className="text-teal-600 w-5 h-5" />
          </div>
          {expandedSection === "profile" && (
            <div className="mt-4 space-y-2">
              <div>
                <label className="text-gray-600">Username</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Enter new username" />
              </div>
              <div>
                <label className="text-gray-600">Email</label>
                <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="Enter new email" />
              </div>
            </div>
          )}
        </div>

        {/* Payment Settings */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("payment")}
          >
            <div className="flex items-center">
              <FaCreditCard className="w-6 h-6 text-teal-600 mr-4" />
              <span className="text-lg font-semibold">Payment Settings</span>
            </div>
            <IoIosArrowForward className="text-teal-600 w-5 h-5" />
          </div>
          {expandedSection === "payment" && (
            <div className="mt-4 space-y-2">
              <div>
                <label className="text-gray-600">Card Number</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Enter card number" />
              </div>
              <div>
                <label className="text-gray-600">Expiration Date</label>
                <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="MM/YY" />
              </div>
            </div>
          )}
        </div>

        {/* Notifications Settings */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("notifications")}
          >
            <div className="flex items-center">
              <FaBell className="w-6 h-6 text-teal-600 mr-4" />
              <span className="text-lg font-semibold">Notifications Settings</span>
            </div>
            <IoIosArrowForward className="text-teal-600 w-5 h-5" />
          </div>
          {expandedSection === "notifications" && (
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="emailNotifications" className="mr-2" />
                <label htmlFor="emailNotifications" className="text-gray-600">Enable Email Notifications</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="smsNotifications" className="mr-2" />
                <label htmlFor="smsNotifications" className="text-gray-600">Enable SMS Notifications</label>
              </div>
            </div>
          )}
        </div>

        {/* Account Settings */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("account")}
          >
            <div className="flex items-center">
              <FaCog className="w-6 h-6 text-teal-600 mr-4" />
              <span className="text-lg font-semibold">Account Settings</span>
            </div>
            <IoIosArrowForward className="text-teal-600 w-5 h-5" />
          </div>
          {expandedSection === "account" && (
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="darkMode" className="mr-2" />
                <label htmlFor="darkMode" className="text-gray-600">Enable Dark Mode</label>
              </div>
              <div>
                <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 mt-4">
                  <FaSignOutAlt className="inline mr-2" />
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
