"use client";


import React from "react";

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/loader_bg.jpg')" }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
