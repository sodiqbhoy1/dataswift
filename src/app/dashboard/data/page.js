"use client";
import { useState } from "react";

export default function Data() {
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

  const [selectedNetwork, setSelectedNetwork] = useState(null);

  // Handle network click
  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 p-6">
      {/* Network List */}
      <div className="flex space-x-4 mb-6">
        {data.networks.map((network, index) => (
          <div
            key={index}
            className="cursor-pointer bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
            onClick={() => handleNetworkClick(network)}
          >
            {network.name}
          </div>
        ))}
      </div>

      {/* Display Data Plans for Selected Network */}
      {selectedNetwork ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center text-teal-600">
            Data Plans for {selectedNetwork.name}
          </h2>

          {/* Table for Data Plans */}
          <table className="min-w-full table-auto bg-gray-50 border-collapse">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left border border-gray-200">Amount</th>
                <th className="px-4 py-2 text-left border border-gray-200">Data Quantity</th>
                <th className="px-4 py-2 text-left border border-gray-200">Expiry</th>
                <th className="px-4 py-2 text-left border border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedNetwork.data_plans.map((plan, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-200">{plan.data_amount}</td>
                  <td className="px-4 py-2 border border-gray-200">{plan.data_quantity}</td>
                  <td className="px-4 py-2 border border-gray-200">{plan.expiry}</td>
                  <td className="px-4 py-2 border border-gray-200">
                    <button className="bg-teal-500 text-white py-1 px-4 rounded-md hover:bg-teal-600 transition duration-300">
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500">Select a network to see the plans</div>
      )}
    </div>
  );
}
