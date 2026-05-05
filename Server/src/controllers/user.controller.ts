import { buildResponse } from '@helpers/response';
import { Request, Response, NextFunction } from 'express';
export { buildResponse } from '@helpers/response';
import { UserService } from '@services/user.service';
import { validationResult } from 'express-validator';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';

class UserController {
  private userService = new UserService();
  getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const usersData = await this.userService.getAllUsers();
      buildResponse(res, 200, usersData);
    } catch (error) {
      next(error);
    }
  };
  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const userData = await this.userService.getUserById(Number(id));
      buildResponse(res, 200, userData);
    } catch (error) {
      next(error);
    }
  };
  regUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;
      const userData = await this.userService.regUser(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true });
      buildResponse(res, 200, userData);
    } catch (error) {
      next(error);
    }
  };

  activate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const activatedLink = req.params.link;
      await this.userService.activate(activatedLink);
      return res.redirect(`https://github.com/nikitaignatenya`);
    } catch (error) {
      next(error);
    }
  };

  loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;
      const userData = await this.userService.loginUser(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true });
      buildResponse(res, 200, userData);
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
