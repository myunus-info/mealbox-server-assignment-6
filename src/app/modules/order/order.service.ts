import { Order } from './order.model';
import { IOrder } from './order.interface';

const createOrder = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getAllOrders = async (providerId: string) => {
  const orders = await Order.find({ provider: providerId })
    .populate({ path: 'customer', select: 'name -_id' })
    .populate({
      path: 'meals.meal',
      select: 'name -_id',
    });

  return orders;
};

const getAllOrdersOfSingleCustomer = async (customerId: string) => {
  const orders = await Order.find({ customer: customerId });
  return orders;
};

const updateOrderStatus = async (providerId: string, payload: Pick<IOrder, 'status' | '_id'>) => {
  const order = await Order.findOneAndUpdate(
    { _id: payload._id, provider: providerId },
    { $set: { status: payload.status } },
    { new: true },
  );
  return order;
};

export const OrderServices = {
  createOrder,
  getAllOrdersOfSingleCustomer,
  updateOrderStatus,
  getAllOrders,
};
