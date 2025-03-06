"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface Dish {
  _id: string;
  name: string;
}

export default function EditChefMealPage() {
  const router = useRouter();
  const params = useParams() as { id: string };

  const [name, setName] = useState("");
  const [allDishes, setAllDishes] = useState<Dish[]>([]);
  const [selectedDishIds, setSelectedDishIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      const res = await fetch("/api/dishes");
      const data = await res.json();
      setAllDishes(data);
    };

    const fetchMeal = async () => {
      const mealRes = await fetch(`/api/meals/${params.id}`);
      if (!mealRes.ok) throw new Error("Could not fetch meal");
      const mealData = await mealRes.json();
      setName(mealData.name);
      setSelectedDishIds(mealData.dishIds || []);
    };

    Promise.all([fetchDishes(), fetchMeal()])
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [params.id]);

  const handleCheckboxChange = (dishId: string) => {
    setSelectedDishIds((prev) =>
      prev.includes(dishId) ? prev.filter((id) => id !== dishId) : [...prev, dishId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/meals/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, dishIds: selectedDishIds }),
      });
      if (res.ok) {
        router.push("/chef/meals");
      } else {
        const data = await res.json();
        alert(data.error || "Error updating meal");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  if (loading) return <div className="p-4">Loading meal...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chef - Edit Meal</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <div>
          <label className="block font-semibold">Meal Name</label>
          <input
            className="border rounded w-full p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <p className="font-semibold">Select Dishes:</p>
          <div className="mt-2 space-y-2">
            {allDishes.map((dish) => (
              <div key={dish._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedDishIds.includes(dish._id)}
                  onChange={() => handleCheckboxChange(dish._id)}
                />
                <label>{dish.name}</label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Meal
        </button>
      </form>
    </div>
  );
}
