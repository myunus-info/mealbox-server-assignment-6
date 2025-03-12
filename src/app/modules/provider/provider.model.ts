import { Schema, model } from 'mongoose';
import { IMealProvider } from './provider.interface';

const mealproviderSchema = new Schema<IMealProvider>(
  {
    businessName: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    cuisine: { type: String, required: true },
    description: { type: String, required: true },
    basePrice: { type: Number, required: true },
    premiumPrice: { type: Number, required: true },
    openTime: { type: String, required: true }, // Stored as "HH:mm"
    closeTime: { type: String, required: true }, // Stored as "HH:mm"
    deliveryRadius: { type: Number, required: true },
    isOpen: { type: Boolean, default: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

export const MealProvider = model<IMealProvider>('MealProvider', mealproviderSchema);
