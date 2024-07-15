import { NextFunction, Request, Response } from "express";
import { BadRequestException } from "../exceptions";


export class ErrorHandler {

  public static run(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof BadRequestException) {
      res.status(err.statusCode).json({
        error: true,
        message: err.message,
      })
    }
  }

}