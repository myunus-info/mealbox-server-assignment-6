import { Router } from 'express';
import { OrderRoutes } from '../modules/order/order.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { MealRoutes } from '../modules/meal/meal.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/providers',
    route: MealRoutes,
  },
  {
    path: '/customers',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => router.use(path, route));

export default router;
