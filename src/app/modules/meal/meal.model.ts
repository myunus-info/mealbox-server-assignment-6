import { model, Schema } from 'mongoose';
import { IMeal } from './meal.interface';

const mealSchema = new Schema<IMeal>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cuisineSpecialties: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    mealTypes: {
      type: [String],
      required: true,
    },
    dietaryTags: {
      type: [String],
      required: true,
    },
    customerReviews: [
      {
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String },
      },
    ],
    provider: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

export const Meal = model('Meal', mealSchema);
