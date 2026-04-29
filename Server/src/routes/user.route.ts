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
    this.router.get(`${this.path}/`, this.userController.getAllUsers);
    this.router.get(`${this.path}/:id`, this.userController.getUserById);
    this.router.post(`${this.path}/registration`, this.userController.regUser);
    this.router.post(`${this.path}/login`, this.userController.loginUser);
    this.router.post(`${this.path}/logout`, this.userController.logoutUser);
  }
}

export default UserRoute;
