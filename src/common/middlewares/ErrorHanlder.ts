import { NextFunction, Request, Response } from "express";
import { ResponseService } from "../services/ResponseService";


export class ErrorHandler {
  private static readonly responseService: ResponseService = new ResponseService();

  public static run() {
    return (err: any, req: Request, res: Response, next: NextFunction) => {
      this.responseService.error(res, err.statusCode, err.message);
    };
  }

}