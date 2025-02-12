"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import AuthContainer from "@/components/AuthContainer";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "diner",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/register", form);
      if (res.status === 201) router.push("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-xl font-bold mb-4">Signup</h2>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full p-2 border rounded mt-2"
            >
              <option value="diner">Diner</option>
              <option value="driver">Driver</option>
              <option value="chef">Chef</option>
            </select>
            <Button type="submit">{loading ? <Loader /> : "Signup"}</Button>
          </form>
        </div>
      </div>
    </AuthContainer>
  );
}
