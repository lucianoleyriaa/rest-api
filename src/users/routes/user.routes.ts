import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { Validation } from '../../common/middlewares/Validation';
import { registerUserSchema } from '../validations/user.validation';

const router = Router();
const userController = new UserController();

router
  .get('/', userController.getUsers)
  .get('/:id', userController.getUserById)
  .post('/create', Validation.validateBody(registerUserSchema), userController.createUser)
  .patch('/update/:id', userController.updateUser)
  .delete('/delete/:id', userController.deleteUser)

export { router as UserRoutes };