import Airtime from "../airtime/page";
import Data from "../data/page";

export default function WalletCard() {
  return (
    <div>
      {/* Wallet Card */}
      <section className="bg-background p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6 mb-6 w-full">
        {/* Wallet Title */}
        <h2 className="text-2xl font-semibold text-center text-secondary mb-4">Wallet</h2>

        {/* Wallet Balance */}
        <p className="text-xl font-bold text-center text-green-600 mb-6">₦10,0000</p>

        {/* Fund Wallet Button */}
        <a
          href="/dashboard"
          className="block text-center py-2 px-4 bg-primary text-white rounded-lg mb-6 hover:bg-opacity-90 transition duration-300"
        >
          Fund Wallet
        </a>

        {/* Phone Number */}
        <p className="text-center text-gray-600 mb-2">Phone Number: 1234567890</p>

        {/* Full Name */}
        <p className="text-center text-gray-600">John Doe</p>
      </section>

      {/* WhatsApp Channel Animation Section */}
      <section className="mt-6">
      <a
  href="https://wa.me/2348123456789"
  className="block text-center py-2 px-4 bg-primary text-white rounded-lg shadow-lg transition duration-500 transform hover:scale-105 hover:bg-opacity-90"
  style={{ animation: "pulse 1.5s infinite" }}
>
  Click here to join our WhatsApp channel
</a>
      </section>

      {/* Airtime Purchase */}
      <section>
        <Airtime />
      </section>

      {/* Data Purchase */}
      <section>
        <Data />
      </section>
    </div>
  );
}