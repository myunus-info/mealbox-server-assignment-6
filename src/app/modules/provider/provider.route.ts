// import express from 'express';
// import { MealProviderControllers } from './provider.controller';
// import validateRequest from '../../middleware/validateRequest';
// import { USER_ROLE } from './provider.constant';
// import auth from '../../middleware/auth';
// import { MealProviderValidations } from './provider.validation';

// const router = express.Router();

// router.put(
//   '/profile',
//   auth(USER_ROLE.provider),
//   validateRequest(MealProviderValidations.createMealProviderValidationSchema),
// );

// router.get('/me', auth(USER_ROLE.provider), MealProviderControllers.getMe);

// export const MealProviderRoutes = router;
