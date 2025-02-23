"use client";
import { useState, useEffect } from "react";
import  PaystackPop  from "@paystack/inline-js";

export default function Data() {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  useEffect(() => {
    // Ensure that Paystack is only initialized in the browser (client-side)
    if (typeof window !== "undefined") {
      const paystack = new PaystackPop();
    }
  }, []);

  // Function to handle Paystack payment
  const handlePayment = (data_amount, email) => {
    const paystack = new PaystackPop(); // Ensure this is available in the browser context

    paystack.newTransaction({
      key: "pk_live_973da5bad14f2a295609bf58ffe31d5bda3a344e", // Your actual Paystack public key
      email: email, // User's email
      amount: data_amount * 100, // Amount in kobo (e.g., ₦500 = 50000 kobo)
      onSuccess: (transaction) => {
        // Payment successful!
        console.log("Payment successful!", transaction);
        alert("Payment successful!");
      },
      onCancel: () => {
        // User canceled the payment
        console.log("Payment canceled.");
        alert("Payment canceled.");
      },
    });
  };

  // Data for networks and plans
  const data = {
    networks: [
      {
        name: "MTN",
        data_plans: [
          { data_amount: "₦500", data_quantity: "500MB", expiry: "1 day" },
          { data_amount: "₦1000", data_quantity: "1GB", expiry: "7 days" },
          { data_amount: "₦2000", data_quantity: "2GB", expiry: "14 days" },
          { data_amount: "₦5000", data_quantity: "5GB", expiry: "30 days" },
          { data_amount: "₦10000", data_quantity: "10GB", expiry: "30 days" },
        ],
      },
      {
        name: "Airtel",
        data_plans: [
          { data_amount: "₦400", data_quantity: "350MB", expiry: "1 day" },
          { data_amount: "₦1200", data_quantity: "1.5GB", expiry: "7 days" },
          { data_amount: "₦2500", data_quantity: "3GB", expiry: "14 days" },
          { data_amount: "₦6000", data_quantity: "7GB", expiry: "30 days" },
          { data_amount: "₦12000", data_quantity: "15GB", expiry: "30 days" },
        ],
      },
      {
        name: "Glo",
        data_plans: [
          { data_amount: "₦600", data_quantity: "600MB", expiry: "1 day" },
          { data_amount: "₦1500", data_quantity: "1GB", expiry: "7 days" },
          { data_amount: "₦3000", data_quantity: "3GB", expiry: "14 days" },
          { data_amount: "₦7000", data_quantity: "7GB", expiry: "30 days" },
          { data_amount: "₦15000", data_quantity: "20GB", expiry: "30 days" },
        ],
      },
      {
        name: "9Mobile",
        data_plans: [
          { data_amount: "₦400", data_quantity: "350MB", expiry: "1 day" },
          { data_amount: "₦1200", data_quantity: "1GB", expiry: "7 days" },
          { data_amount: "₦2500", data_quantity: "2.5GB", expiry: "14 days" },
          { data_amount: "₦6000", data_quantity: "6GB", expiry: "30 days" },
          { data_amount: "₦12000", data_quantity: "12GB", expiry: "30 days" },
        ],
      },
    ],
  };

  // Handle network click
  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-background p-6">
      {/* Network List */}
      <div className="flex space-x-4 mb-6">
        {data.networks.map((network, index) => (
          <div
            key={index}
            className="cursor-pointer bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out"
            onClick={() => handleNetworkClick(network)}
          >
            {network.name}
          </div>
        ))}
      </div>

      {/* Display Data Plans for Selected Network */}
      {selectedNetwork ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
            Data Plans for {selectedNetwork.name}
          </h2>

          {/* Table for Data Plans */}
          <table className="min-w-full table-auto bg-gray-50 border-collapse">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2 text-left border border-gray-200 text-sm sm:text-base">
                  Amount
                </th>
                <th className="px-4 py-2 text-left border border-gray-200 text-sm sm:text-base">
                  Data Quantity
                </th>
                <th className="px-4 py-2 text-left border border-gray-200 text-sm sm:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedNetwork.data_plans.map((plan, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-200 text-sm sm:text-base">
                    {plan.data_amount}
                  </td>
                  <td className="px-4 py-2 border border-gray-200 text-sm sm:text-base">
                    {plan.data_quantity} - {plan.expiry}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {/* Buy Now Button */}
                    <button
                      onClick={() =>
                        handlePayment(
                          parseFloat(plan.data_amount.replace("₦", "")), // Extract amount (e.g., ₦500 -> 500)
                          "user@example.com" // Replace with the user's email
                        )
                      }
                      className="bg-primary text-white py-1 px-4 rounded-md hover:bg-opacity-90 transition duration-300 text-sm sm:text-base"
                    >
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-secondary">
          Select a network to see the plans
        </div>
      )}
    </div>
  );
}
