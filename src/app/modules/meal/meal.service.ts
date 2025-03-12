import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IMeal } from './meal.interface';
import { Meal } from './meal.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { mealSearchabelFields } from './meal.constant';

const createMeal = async (meal: IMeal) => {
  const result = await Meal.create(meal);

  return result;
};

const fetchAll = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Meal.find(), query).search(mealSearchabelFields).filter();
  const result = await productQuery.queryModel;
  if (result.length < 1) {
    throw new AppError(httpStatus.NOT_FOUND, 'No meal found');
  }

  return result;
};

const fetchOne = async (id: string) => {
  const result = await Meal.findById(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, `No meal found with id: ${id}`);
  }

  return result;
};

const updateMenu = async (id: string, payload: Partial<IMeal>) => {
  const result = await Meal.findByIdAndUpdate(id, payload);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, `Meal could not be updated with id: ${id}`);
  }

  return result;
};
const deleteMenu = async (id: string) => {
  const result = await Meal.findByIdAndDelete(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, `Meal could not be deleted with id: ${id}`);
  }

  return result;
};

export const MealServices = {
  createMeal,
  updateMenu,
  deleteMenu,
  fetchAll,
  fetchOne,
};
