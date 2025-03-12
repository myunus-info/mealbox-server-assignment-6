import { Types } from 'mongoose';

// Meal Collection
export interface IMeal {
  name: string;
  description: string;
  cuisineSpecialties: string[];
  price: number;
  experience: number;
  imageUrl: string;
  category: string;
  mealTypes: string[];
  dietaryTags: string[];
  customerReviews?: { rating: number; comment?: string }[];
  provider: Types.ObjectId;
}
