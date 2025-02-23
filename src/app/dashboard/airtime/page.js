"use client";
import { useState } from "react";

export default function Airtime() {
  const [network, setNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    // Add your payment logic here
    console.log(`Paying ${amount} to ${phoneNumber} on ${network} network`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-background p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-secondary">
        Airtime Purchase
      </h2>

      {/* Network Selection */}
      <div className="mb-4">
        <label htmlFor="network" className="block text-sm font-medium text-secondary">
          Select Network
        </label>
        <select
          id="network"
          name="network"
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option value="">-- Choose Network --</option>
          <option value="MTN">MTN</option>
          <option value="GLO">GLO</option>
          <option value="Airtel">Airtel</option>
          <option value="9Mobile">9Mobile</option>
        </select>
      </div>

      {/* Phone Number Input */}
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-secondary">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label htmlFor="amount" className="block text-sm font-medium text-secondary">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      {/* Pay Button */}
      <div className="flex justify-center">
        <button
          onClick={handlePayment}
          className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Pay
        </button>
      </div>
    </div>
  );
}