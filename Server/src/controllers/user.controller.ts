import { buildResponse } from '@helpers/response';
import { Request, Response, NextFunction } from 'express';
export { buildResponse } from '@helpers/response';
import { UserService } from '@services/user.service';

class UserController {
  private userService = new UserService();
  getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      buildResponse(res, 200, await this.userService.getAllUsers());
    } catch (error) {
      next(error);
    }
  };
  getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.body;
      buildResponse(res, 200, this.userService.getUserById(id));
    } catch (error) {
      next(error);
    }
  };
  regUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;
      const userData = await this.userService.regUser(email, password);
      buildResponse(res, 200, userData);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    } catch (error) {
      next(error);
    }
  };
  loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      buildResponse(res, 200, this.userService.loginUser());
    } catch (error) {
      next(error);
    }
  };
  logoutUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      buildResponse(res, 200, this.userService.logoutUser());
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
