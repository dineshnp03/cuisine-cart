"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
    alert("Signup Success");
    setLoading(false);
    router.push("/auth/login");
    // try {
    //   const res = await axios.post("/services/auth/signup", form, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (res.status === 201) router.push("/login");
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <AuthContainer>
      <div className="flex items-center justify-center ">
        <div className=" flex flex-col justify-center p-6 ">
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
            <Button type="submit">{loading ? <Loader /> : "Signup"}</Button>
          </form>
        </div>
      </div>
    </AuthContainer>
  );
}
