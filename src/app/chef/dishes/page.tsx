"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Dish {
  _id: string;
  name: string;
  type: string;
  photoUrl?: string;
}

export default function ChefDishesPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch all dishes from /api/dishes
  const fetchDishes = async () => {
    try {
      const res = await fetch("/api/dishes");
      const data = await res.json();
      setDishes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this dish?")) return;
    try {
      await fetch(`/api/dishes/${id}`, { method: "DELETE" });
      setDishes((prev) => prev.filter((d) => d._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div className="p-4">Loading dishes...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chef - Manage Dishes</h1>
      <Link
        href="/chef/dishes/new"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Create New Dish
      </Link>

      <ul className="mt-4 space-y-3">
        {dishes.map((dish) => (
          <li key={dish._id} className="p-2 border rounded flex items-center justify-between">
            <div>
              <p className="font-semibold">{dish.name}</p>
              <p className="text-sm text-gray-600">{dish.type}</p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/chef/dishes/${dish._id}/edit`}
                className="bg-yellow-500 text-white px-3 py-1 rounded">
                Edit
              </Link>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(dish._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
