import express from 'express';
import { MealControllers } from './meal.controller';
import validateRequest from '../../middleware/validateRequest';
import { MealValidations } from './meal.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { OrderControllers } from '../order/order.controller';
import { MealProviderValidations } from '../provider/provider.validation';
import { MealProviderControllers } from '../provider/provider.controller';

const router = express.Router();

router.get('/orders', auth(USER_ROLE.provider), OrderControllers.getAllOrders);
router.put('/respond', auth(USER_ROLE.provider), OrderControllers.updateOrderStatus);
router.put(
  '/profile',
  auth(USER_ROLE.provider),
  validateRequest(MealProviderValidations.createMealProviderValidationSchema),
  MealProviderControllers.updateMealProviderProfile,
);
router.get('/me', auth(USER_ROLE.provider), MealProviderControllers.getMe);

router
  .route('/menu')
  .post(
    auth(USER_ROLE.provider, USER_ROLE.customer),
    validateRequest(MealValidations.createMealSchema),
    MealControllers.createMeal,
  )
  .get(MealControllers.getAllMeals);

router
  .route('/menu/:mealId')
  .get(auth(USER_ROLE.provider), MealControllers.getASpecificMeal)
  .put(
    auth(USER_ROLE.provider),
    validateRequest(MealValidations.updateMealSchema),
    MealControllers.updateASpecificMeal,
  )
  .delete(auth(USER_ROLE.provider), MealControllers.deleteASpecificMeal);

export const MealRoutes = router;
