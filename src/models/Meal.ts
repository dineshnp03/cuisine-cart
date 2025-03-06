import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IMeal extends Document {
  name: string;
  // array of references to Dish docs. Mongoose can store them as ObjectIds
  // or just store strings. This example uses actual refs to the Dish model
  dishIds: mongoose.Types.ObjectId[];
}

const MealSchema = new Schema<IMeal>({
  name: { type: String, required: true },
  dishIds: [{ type: Schema.Types.ObjectId, ref: "Dish" }],
});

export const Meal = models.Meal || model<IMeal>("Meal", MealSchema);
