import { Router } from 'express';
import { iRoutes } from '@interfaces/router.interface';
import TokenController from '@controllers/token.controller';

class TokenRoute implements iRoutes {
  public router = Router();
  public path = '/token';
  public tokenController = new TokenController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(`${this.path}/activate`, this.tokenController.activateToken);
    this.router.post(`${this.path}/refresh`, this.tokenController.refreshToken);
  }
}
export default TokenRoute;
