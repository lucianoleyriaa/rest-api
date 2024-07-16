import { Response } from 'express';

export class ResponseService {

  public success<T>(res: Response, statusCode: number, data?: T) {
    return res.status(statusCode).json({
      status: 'Ok',
      data
    });
  }

  public error(res: Response, statusCode: number, errorMessage: string) {
    return res.status(statusCode).json({
      status: 'error',
      message: errorMessage,
    });
  }

}