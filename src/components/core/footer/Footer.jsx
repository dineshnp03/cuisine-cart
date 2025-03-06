// components/Footer.js
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={120}
            height={120}
            className="w-50 h-50 rounded"
          />
          <h1 className="font-bold text-xl">Cuisine Cart</h1>
          <p className="text-sm mt-4 text-gray-400">
            &copy; {new Date().getFullYear()} Cuisine Cart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
