// pages/profile.js
"use client"

import { FaUser, FaEnvelope, FaPhone, FaWallet, FaCrown, FaEdit, FaTrashAlt } from "react-icons/fa";

export default function Profile() {
  // Simulated user data (replace with real data later)
  const user = {
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+234 123 456 7890",
    walletBalance: 1500, // Assuming this is in Naira (₦)
    membershipStatus: "Premium",
    profilePicture: "/path/to/profile-picture.jpg" // Sample path for profile picture
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Profile</h1>
      
      {/* User Info Card */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-teal-600 object-cover"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>

        {/* Card content */}
        <div className="space-y-6">
          <div className="flex items-center">
            <FaUser className="text-teal-600 w-6 h-6 mr-4" />
            <p className="text-gray-600">Full Name</p>
            <p className="font-semibold text-gray-800 ml-4">{user.fullName}</p>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-teal-600 w-6 h-6 mr-4" />
            <p className="text-gray-600">Email</p>
            <p className="font-semibold text-gray-800 ml-4">{user.email}</p>
          </div>

          <div className="flex items-center">
            <FaPhone className="text-teal-600 w-6 h-6 mr-4" />
            <p className="text-gray-600">Phone Number</p>
            <p className="font-semibold text-gray-800 ml-4">{user.phoneNumber}</p>
          </div>

          <div className="flex items-center">
            <FaWallet className="text-teal-600 w-6 h-6 mr-4" />
            <p className="text-gray-600">Wallet Balance</p>
            <p className="font-semibold text-green-600 ml-4">₦{user.walletBalance}</p>
          </div>

          <div className="flex items-center">
            <FaCrown className="text-teal-600 w-6 h-6 mr-4" />
            <p className="text-gray-600">Membership Status</p>
            <p className={`font-semibold ml-4 ${user.membershipStatus === "Premium" ? 'text-blue-600' : 'text-gray-600'}`}>
              {user.membershipStatus}
            </p>
          </div>
        </div>
      </div>

      {/* Edit Profile & Delete Account Buttons */}
      <div className="mt-8 flex justify-center space-x-6">
        <button
          className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300 flex items-center"
          onClick={() => alert("Edit Profile functionality here")}
        >
          <FaEdit className="mr-2" />
          Edit Profile
        </button>

        <button
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 flex items-center"
          onClick={() => alert("Delete Account functionality here")}
        >
          <FaTrashAlt className="mr-2" />
          Delete Account
        </button>
      </div>
    </div>
  );
}
