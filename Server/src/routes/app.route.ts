import express from 'express';
import UserRoute from '@routes/user.route';
import { iAppRoute } from '@interfaces/router.interface';

export class AppRoute implements iAppRoute {
  public app = express.Router();
  public userRoute = new UserRoute();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.app.use('/user', this.userRoute.router);
  }
}
