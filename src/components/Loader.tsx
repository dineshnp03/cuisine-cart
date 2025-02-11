import React from "react";
import Image from "next/image";

const Loader: React.FC = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/loader_bg.jpg')` }}
    >
      <Image
        src="/images/logo.jpeg"
        alt="Logo"
        width={200}
        height={300}
        className="w-50 h-50 "
      />

      <div className="mt-4 text-center">
        <span className="text-black text-4xl font-bold">Cuisine</span>
        <span className="text-orange-500 text-4xl font-bold"> Cart</span>
      </div>
    </div>
  );
};

export default Loader;
