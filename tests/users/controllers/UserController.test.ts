import { NextFunction, Request, Response } from "express";
import { UserController } from "../../../src/users/controllers/UserController";
import { UserService } from "../../../src/users/services/UserService";
import { ResponseService } from "../../../src/common/services/ResponseService";

const createUserMock = jest.fn();
const successResponseMock = jest.fn();

jest.mock('../../../src/common/services/ResponseService', () => {
  return {
    ResponseService: jest.fn().mockImplementation(() => {
      return {
        success: successResponseMock, 
      }
    })
  }
});

jest.mock('../../../src/users/services/UserService', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return {
        createUser: createUserMock,
      }
    })
  }
});

describe('UserController', () => {
  let sut: UserController;
  let userService: UserService;
  let responseService: ResponseService;

  const newUserMock = {
    id: '',
    name: 'luciano',
    email: 'lucholeyria@gmail.com',
    age: 28,
  } 

  const req = {
    body: {
      name: 'luciano',
      email: 'lucholeyria@gmail.com',
      age: 28,
    }
  }

  const res = {}

  const next = jest.fn();

  beforeEach(() => {
    userService = new UserService();
    responseService = new ResponseService();
    sut = new UserController(userService, responseService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('Should call createUser method with name, email and age', () => {
    createUserMock.mockReturnValue(newUserMock);
    const user = sut.createUser(req as Request, res as Response, next as NextFunction);

    expect(createUserMock).toHaveBeenCalledTimes(1);
    expect(createUserMock).toHaveBeenLastCalledWith(req.body.name, req.body.email, req.body.age);
    expect(successResponseMock).toHaveBeenCalledWith(res, 201, newUserMock);
  })
});