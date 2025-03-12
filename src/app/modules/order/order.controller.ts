/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderServices } from './order.service';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const createOrder = catchAsync(async (req, res) => {
  const orderData = { customer: req.user._id.toString(), ...req.body };

  const order = await OrderServices.createOrder(orderData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order created successfully',
    data: order,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const orders = await OrderServices.getAllOrders(req.user._id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: orders,
  });
});

const getAllOrdersOfSingleUser = catchAsync(async (req, res) => {
  const orders = await OrderServices.getAllOrdersOfSingleCustomer(req.user._id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: orders,
  });
});

const updateOrderStatus = catchAsync(async (req, res) => {
  const provider = req.user._id;

  const order = await OrderServices.updateOrderStatus(provider, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order status updated successfully',
    data: order,
  });
});

export const OrderControllers = {
  getAllOrders,
  createOrder,
  getAllOrdersOfSingleUser,
  updateOrderStatus,
};
