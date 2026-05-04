import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { buildResponse } from '@helpers/response';

export const errorMiddleware = (error: HttpException, _req: Request, res: Response, next: NextFunction): void => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';
    const id: number = error.id;

    buildResponse(res, status, { id, message });
  } catch (error) {
    next(error);
  }
};
