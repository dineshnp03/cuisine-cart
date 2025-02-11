"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Cuisine Cart</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-800 focus:outline-none">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />
        <div className="fixed inset-0 z-20 flex flex-col justify-between items-center bg-white">
          <Dialog.Panel className="w-full h-full p-6 flex flex-col justify-between">
            {/* Logo Section */}
            <div className="text-center mb-6">
              <Link href="/" className="text-3xl font-bold text-gray-800">
                Cuisine Cart
              </Link>
            </div>

            <nav className="flex flex-col items-center space-y-6 mb-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl text-gray-600 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="text-center">
              <a
                href="mailto:support@cuisinecart.com"
                className="block bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold mb-4 hover:bg-orange-700 transition duration-300">
                Contact Us
              </a>
              <div className="text-gray-600 text-lg">Phone: (123) 456-7890</div>
            </div>
          </Dialog.Panel>

          <div className="absolute top-4 right-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 focus:outline-none">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
