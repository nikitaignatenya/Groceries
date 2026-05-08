import { Router } from 'express';
import { iRoutes } from '@interfaces/app-interfaces/router.interface';
import UserController from '@controllers/user.controller';
import { validationMiddleware } from '@middlewares/validation.middleware';
import { authMiddleware } from '@middlewares/auth.middleware';

class UserRoute implements iRoutes {
  public path = '/user';
  public router = Router();
  public userController = new UserController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`/`, authMiddleware, this.userController.getAllUsers);
    this.router.get(`/:id`, this.userController.getUserById);
    this.router.post(`/registration`, validationMiddleware, this.userController.regUser);
    this.router.post(`/login`, validationMiddleware, this.userController.loginUser);
    this.router.post(`/logout`, this.userController.logoutUser);
    this.router.get(`/activate/:link`, this.userController.activate);
    this.router.post(`/refresh`, this.userController.refresh);
  }
}

export default UserRoute;
