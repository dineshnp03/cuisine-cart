'use client'

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Loader from "@/components/Loader";
import Image from "next/image";
import axios from 'axios';
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role"); // Get role from query params

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", form);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        toast.success(" Login Success!", { description: "Logged In successfully." });
        if (role === "diner") {
          router.push("/diner/dashboard"); 
        } else {
          router.push("/"); // Default redirect
        }
      } else {
        toast.error("Invalid Credentials", { description: "Please check your email and password." });
      }
    } catch (error) {
      toast.error("Error!", { description: `Something went wrong!, Please try Again ${error}` });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF6EC] p-4">
      {/* Login Container */}
      <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-6xl h-[750px] border border-[#FF9A1F] flex flex-col items-center">
        {/* Half Circle at the Top */}

        <div className="flex flex-grow w-full">
          {/* Left Side - Image Section */}
          <div className="hidden md:flex w-1/2 h-full bg-orange-100 items-center justify-center p-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/login-bg.jpg"
                alt="Login Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-l-3xl"
              />
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="relative w-full md:w-1/2 flex flex-col items-center p-10">
            {/* Half Circle at the Top */}
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[200px] h-[120px] bg-orange-500 rounded-b-full flex items-center justify-center">
              <h2 className="text-2xl mt-10 font-semibold text-black">
                {role ? `Login as ${role}` : "Login"}
              </h2>
            </div>

            <div className="relative w-full flex flex-col items-center p-10 mt-20 pt-20">
              {/* Form Section */}
              <form
                onSubmit={handleSubmit}
                className="space-y-2 w-[85%] max-w-[400px]"
              >
                {/* Email Input */}
                <div>
                  <Label className="block text-gray-700 font-semibold mb-1">
                    Email
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Image
                        src="/icons/mail.svg"
                        alt="Email Icon"
                        width={22}
                        height={22}
                        className="filter invert-0 brightness-0"
                      />
                    </span>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full h-12 p-3 pl-12 border border-[#FF9A1F] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <Label className="block text-gray-700 font-semibold mb-1">
                    Password
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Image
                        src="/icons/password.svg"
                        alt="Password Icon"
                        width={22}
                        height={22}
                        className="filter invert-0 brightness-0"
                      />
                    </span>
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      className="w-full h-12 p-3 pl-12 pr-12 border border-[#FF9A1F] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <span
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Image
                        src={
                          showPassword
                            ? "/icons/visibility-off.svg"
                            : "/icons/visibility-on.svg"
                        }
                        alt="Toggle Password"
                        width={22}
                        height={22}
                        className="filter invert-0 brightness-0"
                      />
                    </span>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                  <span
                    className="text-orange-500 font-semibold cursor-pointer hover:underline"
                    onClick={() => router.push('/forgot-password')}
                  >
                    Forgot Password?
                  </span>
                </div>

                {/* Login Button */}
                <div className="w-full flex justify-center">
                  <Button
                    type="submit"
                    className="w-[80%] bg-orange-500 hover:bg-orange-600 font-semibold py-3 transition duration-200"
                  >
                    {loading ? <Loader /> : "Login"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Signup Link */}
            <p className="text-center text-gray-600 mt-6">
              Dont have an account?{" "}
              <span
                className="text-orange-500 font-semibold cursor-pointer hover:underline"
                onClick={() => router.push("/auth/signup")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}