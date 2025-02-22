// pages/features.js
import Head from "next/head";
import Link from "next/link";
import Navbar from "../navbar/page";

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Features - DataSwift</title>
        <meta
          name="description"
          content="Explore the features of DataSwift. Buy airtime and mobile data instantly with ease."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Explore Our Features
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how DataSwift makes buying airtime and data fast, reliable, and secure.
          </p>
          <div className="space-x-4">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/"
              className="bg-transparent text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Why DataSwift?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Instant Delivery
            </h3>
            <p className="text-gray-600">
              Get your airtime and data delivered to your phone instantly, anytime, anywhere.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Our support team is available around the clock to assist you with any issues.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Your payments are processed securely with Paystack, ensuring peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers and experience the convenience of DataSwift today.
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} DataSwift. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}