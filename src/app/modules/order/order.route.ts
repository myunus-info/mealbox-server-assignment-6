import express from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middleware/validateRequest';
import { OrderValidations } from './order.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { UserControllers } from '../user/user.controller';

const router = express.Router();

router.get('/orders', auth(USER_ROLE.customer), OrderControllers.getAllOrdersOfSingleUser);

router.post(
  '/order',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder,
);

router.put('/profile', auth(USER_ROLE.customer), UserControllers.updateCustomerProfile);

export const OrderRoutes = router;
