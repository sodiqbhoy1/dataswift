// pages/index.js
import Head from "next/head";
import Link from "next/link";
import Navbar from "../navbar/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>DataSwift - Buy Airtime and Data Instantly</title>
        <meta
          name="description"
          content="Buy airtime and mobile data instantly with DataSwift. Fast, reliable, and easy to use."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="text-center py-32 relative overflow-hidden"
        style={{
          backgroundImage: `url("/waves.svg")`, // Update this line to point to your SVG file
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#030f0f", // Dark background color
        }}
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#fe6807] mb-6">
            Buy Airtime and Data <br /> in Seconds
          </h1>
          <p className="text-lg md:text-xl text-[#00df82] mb-8">
            Fast, reliable, and easy to use. Get your airtime and mobile data
            instantly with DataSwift.
          </p>
          <div className="space-x-4">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-[#03624c] to-[#00df82] text-white px-8 py-3 rounded-lg hover:from-[#03624c] hover:to-[#00df82] transition duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="bg-transparent text-white px-8 py-3 rounded-lg border border-white hover:bg-white hover:text-[#030f0f] transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03624c] text-center mb-16">
          Why Choose DataSwift?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Instant Delivery */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#03624c] p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
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
            <h3 className="text-2xl font-semibold text-[#03624c] mb-4">
              Instant Delivery
            </h3>
            <p className="text-gray-600">
              Get your airtime and data delivered to your phone instantly.
            </p>
          </div>

          {/* Feature 2: 24/7 Support */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#03624c] p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
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
            <h3 className="text-2xl font-semibold text-[#03624c] mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              We’re here to help you anytime, anywhere.
            </p>
          </div>

          {/* Feature 3: Secure Payments */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#03624c] p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
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
            <h3 className="text-2xl font-semibold text-[#03624c] mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Your payments are safe and secure with Paystack.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#030f0f] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffc01d] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Join thousands of satisfied customers enjoying instant airtime and
            data with DataSwift.
          </p>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-[#03624c] to-[#00df82] text-white px-8 py-3 rounded-lg hover:from-[#03624c] hover:to-[#00df82] transition duration-300 transform hover:scale-105"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030f0f] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} DataSwift. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}