"use client";

import { FaUser, FaWallet, FaPlus, FaEdit, FaPhone } from "react-icons/fa";

export default function Profile() {
  // Simulated user data (replace with real data later)
  const user = {
    fullName: "John Wu Doe",
    walletBalance: 1500, // Assuming this is in Naira (₦)
    email: "johndoe@example.com",
    phoneNumber: "+234 123 456 7890",
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      {/* Container with full width on small screens */}
      <div className="w-full mx-auto sm:max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
            Profile
          </h1>
          <p className="text-gray-600">Manage your account details and wallet balance.</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary flex items-center justify-center mb-4">
              <FaUser className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-secondary">
              {user.fullName}
            </h2>
          </div>

          {/* User Details */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-background rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <FaUser className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600">Email</p>
                <p className="text-sm sm:text-base font-semibold text-secondary">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-background rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600">Phone Number</p>
                <p className="text-sm sm:text-base font-semibold text-secondary">
                  {user.phoneNumber}
                </p>
              </div>
            </div>

            {/* Wallet Balance */}
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-background rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <FaWallet className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600">Wallet Balance</p>
                <p className="text-sm sm:text-base font-semibold text-primary">
                  ₦{user.walletBalance}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 sm:mt-8 flex flex-col space-y-3 sm:space-y-4">
            <button
              className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white font-semibold rounded-lg flex items-center justify-center hover:bg-opacity-90 transition duration-300"
              onClick={() => alert("Fund Wallet functionality here")}
            >
              <FaPlus className="mr-2" />
              Fund Wallet
            </button>
            <button
              className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-background text-secondary font-semibold rounded-lg border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition duration-300"
              onClick={() => alert("Edit Profile functionality here")}
            >
              <FaEdit className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}