import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { BadRequestException } from "../exceptions";

export class Validation {
  
  public static validateBody<T>(schema: Joi.ObjectSchema<T>) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);

      if (error) {                
        const errorMessage = error.details[0].message.replaceAll('"', '');
        throw new BadRequestException(errorMessage);
      }

      next();
    }
  }
  public static validateParams<T>(schema: Joi.ObjectSchema<T>) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);

      if (error) {                
        const errorMessage = error.details[0].message.replaceAll('"', '');
        throw new BadRequestException(errorMessage);
      }

      next();
    }
  }
}