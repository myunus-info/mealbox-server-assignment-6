/* eslint-disable @typescript-eslint/no-explicit-any */

import { MealServices } from './meal.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createMeal = catchAsync(async (req, res) => {
  const mealData = { ...req.body, provider: req.user._id };
  const meal = await MealServices.createMeal(mealData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Meal created successfully',
    data: meal,
  });
});

const getAllMeals = catchAsync(async (req, res) => {
  const result = await MealServices.fetchAll(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Meals retrieved successfully',
    data: result,
  });
});

const getASpecificMeal = catchAsync(async (req, res) => {
  const { mealId } = req.params;
  const meal = await MealServices.fetchOne(mealId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Meal retrieved successfully',
    data: meal,
  });
});

const updateASpecificMeal = catchAsync(async (req, res) => {
  const { mealId } = req.params;
  const meal = await MealServices.updateMenu(mealId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Meal updated successfully',
    data: meal,
  });
});
const deleteASpecificMeal = catchAsync(async (req, res) => {
  const { mealId } = req.params;
  const meal = await MealServices.deleteMenu(mealId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Meal updated successfully',
    data: meal,
  });
});

export const MealControllers = {
  createMeal,
  updateASpecificMeal,
  deleteASpecificMeal,
  getAllMeals,
  getASpecificMeal,
};
