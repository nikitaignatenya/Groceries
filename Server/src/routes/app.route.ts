import express from 'express';
import { Router } from 'express';
import UserRoute from '@routes/user.route';
import TokenRoute from '@routes/token.route';
import { iAppRoute } from '@interfaces/router.interface';

export class AppRoute implements iAppRoute {
  public app = express.Router();
  public tokenRoute = new TokenRoute();
  public userRoute = new UserRoute();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.app.use('/token', this.tokenRoute.router);
    this.app.use('/user', this.userRoute.router);
  }
}
