"use client"
import { useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, dataPlan: "1GB - 30 days", status: "Active", transactionDate: "2025-01-10" },
    { id: 2, dataPlan: "5GB - 30 days", status: "Expired", transactionDate: "2025-01-12" },
    { id: 3, dataPlan: "10GB - 60 days", status: "Pending", transactionDate: "2025-01-14" },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-teal-900 mb-6">Your Data Orders</h1>

      {/* Order List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:bg-teal-50 transition"
            onClick={() => handleOrderClick(order)}
          >
            <h3 className="text-xl font-semibold text-teal-900">{order.dataPlan}</h3>
            <p className="text-gray-600">Status: {order.status}</p>
            <p className="text-gray-400 text-sm">Transaction Date: {order.transactionDate}</p>
            <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-md w-full hover:bg-teal-700">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Order Details Section */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg w-80 sm:w-96 shadow-lg">
            <button
              onClick={handleCloseDetails}
              className="absolute top-2 right-2 text-gray-500 hover:text-teal-600"
            >
              X
            </button>
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              Order Details - {selectedOrder.dataPlan}
            </h2>
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Transaction Date:</strong> {selectedOrder.transactionDate}</p>
            <div className="mt-4 space-y-2">
              {selectedOrder.status === "Pending" && (
                <button className="w-full bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700">
                  Activate Plan
                </button>
              )}
              {selectedOrder.status === "Active" && (
                <button className="w-full bg-yellow-600 text-white p-2 rounded-lg hover:bg-yellow-700">
                  Deactivate Plan
                </button>
              )}
              <button className="w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600">
                Renew Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
