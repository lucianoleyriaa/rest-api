import { NextFunction, Request, Response } from "express";

import { ResponseService } from "../../common/services/ResponseService";
import { UserService } from "../services/UserService";
import { User } from "../models/User";

export class UserController {

  constructor(
    public readonly userService: UserService = new UserService(),
    public readonly responseService: ResponseService = new ResponseService(),
  ) {}

  public createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, age } = req.body;

      const user = this.userService.createUser(name, email, age);

      return this.responseService.success<User>(res, 201, user);
    } catch (error) {
      next(error);
    }
  }

  public getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = this.userService.getUsers();
      return this.responseService.success<User[]>(res, 200, users);
    } catch (error) {
      next(error);
    }
  }

  public getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = this.userService.getUserById(req.params.id);
      return this.responseService.success<User>(res, 200, user);
    } catch (error) {
      next(error);
    }
  }

  public updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedUser = this.userService.updateUser(req.params.id, req.body);
      return this.responseService.success<User>(res, 200, updatedUser);
    } catch (error) {
      next(error);
    }
  }

  public deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = this.userService.deleteUser(req.params.id);
      return this.responseService.success(res, 204);
    } catch (error) {
      next(error);
    }
  }

}