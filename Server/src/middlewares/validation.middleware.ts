import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionTypeUser } from '@exceptions/userExceptions.type';


import { iValidationMessage } from '@exceptions/HttpException';

export class ValidationRegExp {
  public passRegExp: RegExp;
  public emailRegExp: RegExp;
  constructor() {
    this.emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  }
}

export const validationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const validationRegExp = new ValidationRegExp();
    const { email, password } = req.body;
    const errorsArray: Array<iValidationMessage> = [];
    if (!validationRegExp.emailRegExp.test(email)) {
      errorsArray.push({ type: 'field', value: email, msg: 'Invalid email format', path: 'email', location: 'body' });
    }
    if (!validationRegExp.passRegExp.test(password)) {
      errorsArray.push({
        type: 'field',
        value: password,
        msg: 'Password must be at least 8 characters and contain letters and numbers',
        path: 'password',
        location: 'body',
      });
    }
    if (errorsArray.length) {
      throw new HttpException(404, ExceptionTypeUser.VALIDATION_ERROR, errorsArray);
    }
    next();
  } catch (error) {
    next(error);
  }
};
