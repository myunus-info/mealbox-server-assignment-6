import { Types } from 'mongoose';

export interface IMealProvider {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  cuisine: string;
  description: string;
  basePrice: number;
  premiumPrice: number;
  openTime: string;
  closeTime: string;
  deliveryRadius: number;
  isOpen: boolean;
  user: Types.ObjectId;
}
