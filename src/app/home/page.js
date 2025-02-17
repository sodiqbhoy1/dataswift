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

      {/* Hero Section with SVG Background */}
      <section
        className="text-center py-32 relative overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23F3F4F6' d='M56.9,-64.2C71.6,-55.6,79.8,-35.5,78.9,-17.3C78,0.8,68.1,17.2,56.6,28.5C45.1,39.8,32.1,46,20.2,46.5C8.3,46.9,-2.4,41.6,-19.7,41C-37,40.4,-60.9,44.7,-67.6,37.1C-74.2,29.5,-63.7,10.1,-58.7,-8.9C-53.6,-27.9,-54,-46.4,-45.2,-56C-36.3,-65.7,-18.2,-66.4,1.5,-68.2C21.1,-70,42.3,-72.8,56.9,-64.2Z' transform='translate(100 100)' /%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Buy Airtime and Data <br /> in Seconds
          </h1>


          <p className="text-xl text-gray-800 mb-8">
            Fast, reliable, and easy to use. Get your airtime and mobile data
            instantly with DataSwift.
          </p>
          <div className="space-x-4">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="bg-transparent text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Why Choose DataSwift?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              Get your airtime and data delivered to your phone instantly.
            </p>
          </div>
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
              We’re here to help you anytime, anywhere.
            </p>
          </div>
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
              Your payments are safe and secure with Paystack.
            </p>
          </div>
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
