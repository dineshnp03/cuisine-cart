"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AxiosError } from 'axios';

export default function ProfilePage() {
  const [userData, setUserData] = useState<any>(null); // To store user data
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
  
        setUserData(res.data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
          // Token expired or invalid, redirect to login
          console.log("Token expired or invalid, redirecting to login...");
          router.push("/auth/login");
        } else {
          console.error("Error fetching user data:", error);
        }
      } 
    }finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF6EC] p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Profile</h2>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <Label className="block">Name</Label>
            <Input
              value={userData.name}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Email */}
          <div>
            <Label className="block">Email</Label>
            <Input
              value={userData.email}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Role */}
          <div>
            <Label className="block">Role</Label>
            <Input
              value={userData.role}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Edit Button (Optional) */}
          <div className="flex justify-center mt-4">
            <Button className="bg-orange-500 text-white hover:bg-orange-600">Edit Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
