import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }),
    email: z
      .string({ required_error: 'Email is required!' })
      .email({ message: 'Invalid email addresss' }),
    password: z.string({ required_error: 'Password is required!' }),
    role: z.enum(['customer', 'provider']).default('customer').optional(),
  }),
});

const updateUserValidationSchema = z.object({
  body: z.object({
    role: z.enum(['customer', 'provider']).default('customer').optional(),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
