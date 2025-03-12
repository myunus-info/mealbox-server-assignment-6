import { UserServices } from './provider.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const updateMealProviderProfile = catchAsync(async (req, res) => {
  const result = await UserServices.updateMealProvider(req.user._id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Meal Provider profile updated successfully',
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  const result = await UserServices.getMe(req.user._id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Meal provider profile retrieved successfully',
    data: result,
  });
});

export const MealProviderControllers = {
  updateMealProviderProfile,
  getMe,
};
