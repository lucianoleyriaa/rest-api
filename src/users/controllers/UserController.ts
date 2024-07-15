import { NextFunction, Request, Response } from "express";


export class UserController {

  public createUser(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(201).json({
        status: 'ok',
        message: "Usuario creado correctamente",
        user: {...req.body}
      })
    } catch (error) {
        
    }
  }

  public getUsers(req: Request, res: Response, next: NextFunction) {

  }

  public getUserById(req: Request, res: Response, next: NextFunction) {

  }

  public updateUser(req: Request, res: Response, next: NextFunction) {
    
  }

  public deleteUser(req: Request, res: Response, next: NextFunction) {
    
  }

}