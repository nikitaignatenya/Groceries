import express from 'express';
import UserRoute from '@routes/user.route';
import { ProductRoute } from './product.route';
import { iAppRoute } from '@interfaces/app-interfaces/router.interface';

export class AppRoute implements iAppRoute {
  public app = express.Router();
  public userRoute = new UserRoute();
  public productRoute = new ProductRoute();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.app.use('/user', this.userRoute.router);
    this.app.use('/product', this.productRoute.router);
  }
}
