import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo with Link to Homepage */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-secondary cursor-pointer hover:text-primary transition">
            DataSwift
          </h1>
        </Link>

        {/* Sign Up Button */}
        <Link
          href="/signup"
          className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}