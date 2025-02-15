"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/page";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/forgot-password", { email });
      setSuccess(true); // Show success message
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex justify-center items-center pt-24 pb-10 px-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">
            Forgot Password
          </h1>

          {/* Error Message */}
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          {/* Success Message */}
          {success && (
            <p className="text-green-600 text-center mb-4">
              A password reset link has been sent to your email.
            </p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Reset Link
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center space-y-4">
            <p className="text-gray-600">
              Remember your password?{" "}
              <Link href="/signin" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}