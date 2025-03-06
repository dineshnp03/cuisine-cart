// src/app/api/dishes/[id]/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Dish } from "@/models/Dish";

interface Params {
  params: { id: string };
}

// GET /api/dishes/:id
export async function GET(_req: Request, { params }: Params) {
  try {
    await connectToDatabase();
    const dish = await Dish.findById(params.id);
    if (!dish) {
      return NextResponse.json({ error: "Dish not found" }, { status: 404 });
    }
    return NextResponse.json(dish, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/dishes/:id
export async function PUT(req: Request, { params }: Params) {
  try {
    await connectToDatabase();
    const updates = await req.json(); // { name, type, photoUrl }
    const updatedDish = await Dish.findByIdAndUpdate(params.id, updates, {
      new: true, // return updated doc
      runValidators: true, // ensure schema validation
    });
    if (!updatedDish) {
      return NextResponse.json({ error: "Dish not found" }, { status: 404 });
    }
    return NextResponse.json(updatedDish, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/dishes/:id
export async function DELETE(_req: Request, { params }: Params) {
  try {
    await connectToDatabase();
    const deletedDish = await Dish.findByIdAndDelete(params.id);
    if (!deletedDish) {
      return NextResponse.json({ error: "Dish not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Dish deleted" }, { status: 204 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
