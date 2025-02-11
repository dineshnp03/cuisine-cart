"use client"; 

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <main>{children}</main>
        </>
      )}
    </>
  );
}