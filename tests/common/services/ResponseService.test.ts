import { ResponseService } from "../../../src/common/services/ResponseService";
import { Response } from 'express';


describe('ResponseService', () => {
  let responseService: ResponseService;

  const usersMock = [
    {
      id: '',
      name: 'luciano',
      email: 'lucho@hotmail.com',
      age: 32
    },
    {
      id: '',
      name: 'gabriel',
      email: 'gabriel@hotmail.com',
      age: 28
    },
  ]

  beforeEach(() => {
    responseService = new ResponseService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it ('should return success response with status code and data', () => {
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const statusCode = 200;
    const data = usersMock;

    responseService.success(mockResponse as any as Response, statusCode, data);

    expect(mockResponse.status).toHaveBeenCalledWith(statusCode);
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'Ok',
      data,
    });
  })
})