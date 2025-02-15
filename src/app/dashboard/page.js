"use client"

export default function Dashboard() {
  // Simulated user data (you can fetch this from an API or state)
  const user = {
    fullName: "John Doe",
    walletBalance: 1500, // Assuming this is in Naira (₦)
    email: "johndoe@example.com",
    membershipStatus: "Premium", // Could be "Basic", "Premium", etc.
  };

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-teal-800 mb-6">Welcome to Your Dashboard</h1>
      
      {/* User Info Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-teal-700 mb-2">User Information</h2>
        
        {/* Card content */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Full Name</p>
            <p className="font-semibold text-teal-800">{user.fullName}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Email</p>
            <p className="font-semibold text-teal-800">{user.email}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Wallet Balance</p>
            <p className="font-semibold text-green-600">₦{user.walletBalance}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Membership Status</p>
            <p className={`font-semibold ${user.membershipStatus === "Premium" ? 'text-teal-600' : 'text-gray-600'}`}>
              {user.membershipStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
