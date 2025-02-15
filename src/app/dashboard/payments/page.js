"use client"
import { useState } from "react";

export default function Payments() {
  const [payments, setPayments] = useState([
    { id: 1, amount: "$20", status: "Completed", paymentDate: "2025-01-10" },
    { id: 2, amount: "$50", status: "Pending", paymentDate: "2025-01-12" },
    { id: 3, amount: "$10", status: "Failed", paymentDate: "2025-01-14" },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentClick = (payment) => {
    setSelectedPayment(payment);
  };

  const handleCloseDetails = () => {
    setSelectedPayment(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-teal-900 mb-6">Your Payments</h1>

      {/* Payment List */}
      <div className="space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:bg-teal-50 transition"
            onClick={() => handlePaymentClick(payment)}
          >
            <h3 className="text-xl font-semibold text-teal-900">Payment of {payment.amount}</h3>
            <p className="text-gray-600">Status: {payment.status}</p>
            <p className="text-gray-400 text-sm">Payment Date: {payment.paymentDate}</p>
            <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-md w-full hover:bg-teal-700">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Payment Details Section */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg w-80 sm:w-96 shadow-lg">
            <button
              onClick={handleCloseDetails}
              className="absolute top-2 right-2 text-gray-500 hover:text-teal-600"
            >
              X
            </button>
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              Payment Details - {selectedPayment.amount}
            </h2>
            <p><strong>Payment ID:</strong> {selectedPayment.id}</p>
            <p><strong>Status:</strong> {selectedPayment.status}</p>
            <p><strong>Payment Date:</strong> {selectedPayment.paymentDate}</p>
            <div className="mt-4 space-y-2">
              {selectedPayment.status === "Pending" && (
                <button className="w-full bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700">
                  Retry Payment
                </button>
              )}
              {selectedPayment.status === "Completed" && (
                <button className="w-full bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700">
                  Download Receipt
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
