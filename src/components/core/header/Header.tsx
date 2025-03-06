"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
  email: string;
  role: string;
  name: string;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/session");
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, [pathname]);

  const chefNavigation = [
    { name: "Dashboard", href: "/chef/dashboard" },
    { name: "Meals", href: "/chef/meals" },
    { name: "Dishes", href: "/chef/dishes" },
    { name: "Subscribers", href: "/chef/subscribers" },
    { name: "Profile", href: "/chef/profile" },
  ];

  const dinerNavigation = [
    { name: "Dashboard", href: "/diner/dashboard" },
    { name: "Meals", href: "/diner/meals" },
    { name: "Chefs", href: "/diner/chefs" },
    { name: "My Subscription", href: "/diner/subscriptions" },
    { name: "Profile", href: "/diner/profile" },
  ];

  // Hide header on login and signup pages
  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return null;
  }

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setUser(null);
      toast.info("Logout Successful!", {
        description: "Session has been logged out.",
      });
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Company Logo" width={90} height={90} className="w-12 h-12 rounded" />
          <p className="text-2xl font-bold text-gray-800 ml-3">Cuisine Cart</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {user ? (
            (user.role === "chef" ? chefNavigation : dinerNavigation).map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600">
                {item.name}
              </Link>
            ))
          ) : (
            <>
              <Link href="/auth/login" className="text-gray-600 hover:text-blue-600">
                Login
              </Link>
              <Link href="/user-selection" className="text-gray-600 hover:text-blue-600">
                Signup
              </Link>
            </>
          )}
          {user && (
            <button onClick={() => setIsModalOpen(true)} className="text-red-600 hover:text-red-800">
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-gray-800 focus:outline-none">
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden fixed inset-0 z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogPanel className="fixed inset-0 z-50 flex flex-col bg-white w-64 p-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-2xl font-bold text-gray-800">Cuisine Cart</p>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-800">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {user ? (
              (user.role === "chef" ? chefNavigation : dinerNavigation).map((item) => (
                <Link key={item.name} href={item.href} className="text-lg text-gray-600 hover:text-blue-600">
                  {item.name}
                </Link>
              ))
            ) : (
              <>
                <Link href="/auth/login" className="text-lg text-gray-600 hover:text-blue-600">
                  Login
                </Link>
                <Link href="/auth/signup" className="text-lg text-gray-600 hover:text-blue-600">
                  Signup
                </Link>
              </>
            )}
            {user && (
              <button onClick={handleLogout} className="text-lg text-red-600 hover:text-red-800">
                Logout
              </button>
            )}
          </nav>
        </DialogPanel>
      </Dialog>

      {/* Logout Confirmation Modal */}
      <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center" open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogPanel className="relative z-50 bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h3 className="text-lg font-semibold text-gray-800">Confirm Logout</h3>
          <p className="text-gray-600 mt-2">Are you sure you want to log out?</p>
          <div className="mt-4 flex justify-end space-x-3">
            <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md">
              Cancel
            </button>
            <button onClick={handleLogout} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
              Logout
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
