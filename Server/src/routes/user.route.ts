import { Router } from 'express';
import { iRoutes } from '@interfaces/router.interface';
import UserController from '@controllers/user.controller';

class UserRoute implements iRoutes {
  public path = '/user';
  public router = Router();
  public userController = new UserController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`/`, this.userController.getAllUsers);
    this.router.get(`/:id`, this.userController.getUserById);
    this.router.post(`/registration`, this.userController.regUser);
    this.router.post(`/login`, this.userController.loginUser);
    this.router.post(`/logout`, this.userController.logoutUser);
    this.router.post(`/activate/:link`, this.userController.logoutUser);
    this.router.post(`/refresh/`, this.userController.logoutUser);
  }
}

export default UserRoute;
