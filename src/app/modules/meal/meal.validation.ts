import { z } from 'zod';

const customerReviewSchema = z.object({
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  comment: z.string().optional(),
});

export const createMealSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Meal name is required'),
    description: z.string().min(1, 'Description is required'),
    cuisineSpecialties: z.array(z.string()).min(1, 'At least one cuisine specialty is required'),
    price: z.number().min(0, 'Price must be a positive number'),
    experience: z.number().min(0, 'Experience must be a positive number'),
    imageUrl: z.string().url('Must be a valid URL').optional(),
    category: z.string().min(1, 'Category is required'),
    mealTypes: z.array(z.string()).min(1, 'At least one meal type is required'),
    dietaryTags: z.array(z.string()).min(1, 'At least one dietary tag is required'),
    customerReviews: z.array(customerReviewSchema).optional(),
  }),
});

export const updateMealSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    cuisineSpecialties: z.array(z.string()).optional(),
    price: z.number().optional(),
    experience: z.number().optional(),
    imageUrl: z.string().url('Must be a valid URL').optional(),
    category: z.string().optional(),
    mealTypes: z.array(z.string()).optional(),
    dietaryTags: z.array(z.string()).optional(),
    customerReviews: z.array(customerReviewSchema).optional(),
  }),
});

export const MealValidations = {
  createMealSchema,
  updateMealSchema,
};
