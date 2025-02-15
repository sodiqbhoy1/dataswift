// navbar/page.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo with Link to Homepage */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition">
            DataSwift
          </h1>
        </Link>

        {/* Sign Up Button */}
        <Link
          href="/signup"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}