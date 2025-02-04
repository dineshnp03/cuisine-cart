// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-4">
          <div className="flex justify-center space-x-6">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy
            </Link>
          </div>
          <p className="text-sm mt-4 text-gray-400">
            &copy; {new Date().getFullYear()} Cuisine Cart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
