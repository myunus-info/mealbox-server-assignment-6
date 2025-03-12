import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Customer is required'],
    },
    provider: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Provider is required'],
    },
    meals: [
      {
        meal: {
          type: Schema.Types.ObjectId,
          ref: 'Meal',
        },
        quantity: Number,
        price: Number,
      },
    ],
    dietaryPreferences: {
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'in_progress', 'delivered'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>('Order', orderSchema);
