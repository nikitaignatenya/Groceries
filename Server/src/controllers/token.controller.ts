import { Response, Request, NextFunction } from 'express';
import { buildResponse } from '@helpers/response';
import { TokenService } from '@services/token.service';
class TokenController {
  private tokenSrvice = new TokenService();
  activateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      buildResponse(res, 200, this.tokenSrvice.activateToken());
    } catch (error) {
      next(error);
    }
  };
  refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      buildResponse(res, 200, this.tokenSrvice.refreshToken());
    } catch (error) {
      next(error);
    }
  };
}

export default TokenController;
