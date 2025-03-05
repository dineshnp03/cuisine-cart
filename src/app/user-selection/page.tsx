"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Title from "../../components/content/Title";

export default function UserSelection() {
  const router = useRouter(); // Initializing router

  const handleRoleSelection = (role: string) => {
    localStorage.setItem("role", role);
    router.push(`/auth/login?role=${role}`); // Redirecting to login with role as query param
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[#FFF6EC]">
      <div className="absolute top-12 mt-9 flex flex-col items-center">
        <Image src="/logo.png" alt="Cuisine Cart Logo" width={100} height={100} />
        <h1 className="text-black text-3xl font-bold mt-4">
          CUISINE <span className="text-orange-400">CART</span>
        </h1>
      </div>

      <Title text="Choose who you are" className="mt-20" />

      <div className="mt-6 flex gap-12">
        {/* Chef */}
        <div
          onClick={() => handleRoleSelection("chef")}
          className="w-1/3 p-6 bg-gradient-to-r from-[#ffa53c] to-[#ff6a13] rounded-2xl shadow-lg flex flex-col items-center justify-center border-2 border-black cursor-pointer transition-transform transform hover:scale-105"
        >
          <Image src="/chef_hat.png" alt="Chef Icon" width={50} height={50} />
          <p className="mt-2 text-lg font-semibold text-black">I&apos;m a Chef</p>
          <p className="text-sm text-gray-700 mt-2 text-center">Create delicious dishes.</p>
        </div>

        {/* Buyer */}
        <div
          onClick={() => handleRoleSelection("diner")}
          className="w-1/3 p-6 bg-gradient-to-r from-[#ffa53c] to-[#ff6a13] rounded-2xl shadow-lg flex flex-col items-center justify-center border-2 border-black cursor-pointer transition-transform transform hover:scale-105"
        >
          <Image src="/food_bar.png" alt="Buyer Icon" width={50} height={50} />
          <p className="mt-2 text-lg font-semibold text-black">I&apos;m a Diner</p>
          <p className="text-sm text-gray-700 mt-2 text-center">Purchase your favorite cuisines.</p>
        </div>

        {/* Driver */}
        <div
          onClick={() => handleRoleSelection("driver")}
          className="w-1/3 p-6 bg-gradient-to-r from-[#ffa53c] to-[#ff6a13] rounded-2xl shadow-lg flex flex-col items-center justify-center border-2 border-black cursor-pointer transition-transform transform hover:scale-105"
        >
          <Image src="/car.png" alt="Driver Icon" width={50} height={50} />
          <p className="mt-2 text-lg font-semibold text-black">I&apos;m a Driver</p>
          <p className="text-sm text-gray-700 mt-2 text-center">Deliver orders to customers.</p>
        </div>
      </div>
    </div>
  );
}