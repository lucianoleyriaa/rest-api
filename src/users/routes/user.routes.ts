import { Router } from 'express';

import { createUserSchema, updateUserSchema } from '../validations/user.validation';
import { Validation } from '../../common/middlewares/Validation';
import { UserController } from '../controllers/UserController';

const router = Router();
const userController = new UserController();

router
  .get('/', (req, res, next) => userController.getUsers(req, res, next))
  .get('/:id', (req, res, next) => userController.getUserById(req, res, next))
  .post('/create', Validation.validateBody(createUserSchema), (req, res, next) => userController.createUser(req, res, next))
  .patch('/update/:id', Validation.validateBody(updateUserSchema), (req, res, next) => userController.updateUser(req, res, next))
  .delete('/delete/:id', (req, res, next) => userController.deleteUser(req, res, next))

export { router as UserRoutes };