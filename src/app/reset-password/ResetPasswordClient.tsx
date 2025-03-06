"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function ResetPasswordClient() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    if (res.ok) {
      const data = await res.json();
      setMessage(data.message);
      toast.success("Password reset successful", {
        description: "Your password has been updated.",
      });
    } else {
      const errorData = await res.text();
      console.error(errorData); 
      toast.error("Password reset failed", {
        description: `Error: ${errorData}`,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/images/login-bg.jpg')] bg-cover bg-no-repeat">
      <form onSubmit={handleResetPassword} className="bg-white p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-80">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded">
          Reset Password
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}
