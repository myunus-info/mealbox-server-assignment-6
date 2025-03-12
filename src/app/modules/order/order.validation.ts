import { z } from 'zod';

const mealsSchema = z.object({
  meal: z.string().length(24, { message: 'Invalid meal Id' }),
  quantity: z.number(),
  price: z.number(),
});

const createOrderValidationSchema = z.object({
  body: z.object({
    meals: z.array(mealsSchema),
    dietaryPreferences: z.string().optional(),
    status: z.enum(['pending', 'in_progress', 'delivered']).optional(),
  }),
});

const updateOrderValidationSchema = z.object({
  body: z.object({
    totalPrice: z.number().optional(),
    status: z.enum(['pending', 'in_progress', 'delivered']).optional(),
    transaction: z
      .object({
        id: z.string().optional(),
        transactionStatus: z.string().optional(),
        bank_status: z.string(),
        sp_code: z.string().optional(),
        sp_message: z.string().optional(),
        method: z.string().optional(),
        date_time: z.string().optional(),
      })
      .optional(),
  }),
});

export const OrderValidations = {
  createOrderValidationSchema,
  updateOrderValidationSchema,
};
