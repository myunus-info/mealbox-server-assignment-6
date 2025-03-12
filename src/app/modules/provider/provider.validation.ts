import { z } from 'zod';

const createMealProviderValidationSchema = z.object({
  body: z.object({
    businessName: z.string().min(1, 'Business name is required'),
    ownerName: z.string().min(1, 'Owner name is required'),
    email: z.string().email('Invalid email format'),
    phone: z.string(),
    address: z.string().min(1, 'Address is required'),
    cuisine: z.string().min(1, 'Cuisine type is required'),
    description: z.string().min(1, 'Description should be more detailed'),
    basePrice: z.string().transform(val => parseFloat(val)), // Convert string to number
    premiumPrice: z.string().transform(val => parseFloat(val)), // Convert string to number
    openTime: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format (HH:mm)'),
    closeTime: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format (HH:mm)'),
    deliveryRadius: z.string().transform(val => parseInt(val, 10)), // Convert string to number
    isOpen: z.boolean(),
  }),
});

export const MealProviderValidations = {
  createMealProviderValidationSchema,
};
