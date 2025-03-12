import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { MealProvider } from './provider.model';
import { IMealProvider } from './provider.interface';

const updateMealProvider = async (user: string, payload: Partial<IMealProvider>) => {
  const mealProvider = await MealProvider.findOneAndUpdate({ user }, payload);
  if (!mealProvider) throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update profile');
  return mealProvider;
};

const getMe = async (userId: string) => {
  const result = await MealProvider.findOne({ user: userId }).populate('user').lean();
  if (!result) throw new AppError(httpStatus.NOT_FOUND, `User with id ${userId} not found!`);
  return result;
};

export const UserServices = {
  updateMealProvider,
  getMe,
};
