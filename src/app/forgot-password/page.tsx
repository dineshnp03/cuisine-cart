"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/forgot-password", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
// Error handling before processing the response
if (!res.ok) {
  const errorData = await res.text();
  console.error(errorData); 
  toast.error("Could not send reset link!", {
    description: `Error: ${errorData}`,
  });
  return; 
}

// If the response is successful
const data = await res.json();
setMessage(data.message);

// Show success toast
toast.success("Reset link sent", {
  description: "Check your email for the reset link.",
});
};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[url('/images/login-bg.jpg')] bg-cover bg-no-repeat">
      <form onSubmit={handleForgotPassword} className="bg-white p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-80">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded">Send Reset Link</button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}
