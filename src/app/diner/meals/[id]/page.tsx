"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Dish {
  _id: string;
  name: string;
  type: string; // e.g. "main", "side"
  photoUrl?: string;
}

interface Meal {
  _id: string;
  name: string;
  dishIds: Dish[]; // after populate
  // mealPhotoUrl?: string; // if you store an image for the meal
}

export default function DinerMealDetailPage() {
  const params = useParams() as { id: string };
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeal();
  }, [params.id]);

  const fetchMeal = async () => {
    try {
      const res = await fetch(`/api/meals/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch meal");
      const data = await res.json();
      // data should contain { name, dishIds: [ { _id, name, type, photoUrl } ... ] }
      setMeal(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-4">Loading meal details...</div>;
  if (!meal) return <div className="p-4">Meal not found</div>;

  return (
    <div className="p-4">
      {/* Meal Header */}
      <div className="flex flex-col items-center mb-6">
        {/* If you have a meal photo, you can show it here */}
        <img
          src="https://via.placeholder.com/600x300?text=Meal+Hero"
          alt={meal.name}
          className="w-full max-w-4xl h-auto object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold">{meal.name}</h1>
      </div>

      {/* Dishes section */}
      <h2 className="text-2xl font-semibold mb-4">Dishes Included ({meal.dishIds.length})</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meal.dishIds.map((dish) => (
          <div key={dish._id} className="border rounded-lg overflow-hidden shadow-sm bg-white">
            <img
              src={dish.photoUrl || "https://via.placeholder.com/400x250?text=Dish+Image"}
              alt={dish.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-600 capitalize">{dish.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
