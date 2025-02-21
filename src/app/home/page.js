import Head from 'next/head';
import Navbar from '../navbar/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-secondary">
      <Head>
        <title>Buy Mobile Data & Airtime in Nigeria</title>
        <meta name="description" content="Buy affordable mobile data and airtime for MTN, Glo, Airtel, and 9mobile in Nigeria." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen SVG shape */}
        <div className="absolute inset-0 z-0">
          <svg
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100 C200 300 400 50 600 100 S1000 0 1200 100 L1440 0 V800 H0 Z"
              fill="#fe6807"
              fillOpacity="0.1"
            />
          </svg>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Buy Mobile Data & Airtime Instantly
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get the best rates for MTN, Glo, Airtel, and 9mobile. Fast, reliable, and affordable.
          </p>
          <div className="space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Buy Now
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Supported Networks Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Supported Networks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="/mtn.svg" alt="MTN" className="w-24 h-24 mx-auto mb-4" />
              <p className="text-lg font-semibold">MTN</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="/glo.svg" alt="Glo" className="w-24 h-24 mx-auto mb-4" />
              <p className="text-lg font-semibold">Glo</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="/airtel.png" alt="Airtel" className="w-24 h-24 mx-auto mb-4" />
              <p className="text-lg font-semibold">Airtel</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="/9mobile.svg" alt="9mobile" className="w-24 h-24 mx-auto mb-4" />
              <p className="text-lg font-semibold">9mobile</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">1. Sign Up</h3>
            <p className="text-gray-600">
              Create an account on DataPlus to start buying data and airtime.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">2. Choose a Plan</h3>
            <p className="text-gray-600">
              Select from a variety of affordable data and airtime plans.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">3. Make Payment</h3>
            <p className="text-gray-600">
              Pay securely using your preferred payment method.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 mb-4">
                "DataPlus is my go-to app for buying data. The rates are unbeatable!"
              </p>
              <p className="font-semibold">— Chinedu O.</p>
            </div>
            <div className="p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 mb-4">
                "I love how fast the delivery is. My data is always topped up in seconds."
              </p>
              <p className="font-semibold">— Adaobi M.</p>
            </div>
            <div className="p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 mb-4">
                "The support team is amazing. They helped me resolve an issue in minutes."
              </p>
              <p className="font-semibold">— Tunde A.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Affordable Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">MTN Data Plans</h3>
            <p className="text-gray-600 mb-4">From ₦500 for 1GB</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Buy Now
            </button>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Airtel Data Plans</h3>
            <p className="text-gray-600 mb-4">From ₦500 for 1GB</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Buy Now
            </button>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4">Glo Data Plans</h3>
            <p className="text-gray-600 mb-4">From ₦500 for 1GB</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white shadow-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} DataPlus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}