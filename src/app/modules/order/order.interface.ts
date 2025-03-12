import { Types } from 'mongoose';

// Orders Collection
export interface IOrderMeal {
  meal: Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IOrder {
  _id?: Types.ObjectId;
  customer: Types.ObjectId;
  provider: Types.ObjectId;
  meals: IOrderMeal[];
  dietaryPreferences?: string;
  status: 'pending' | 'in_progress' | 'delivered';
}
