import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { buildResponse } from '@helpers/response';

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction): void => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';
    const id: number = error.id;
    const validationErrors = error.validationErrors;

    buildResponse(res, status, { id, message, validationErrors });
  } catch (error) {
    next(error);
  }
};
