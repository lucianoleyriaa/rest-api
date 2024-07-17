import { BadRequestException } from "../../../src/common/exceptions";
import { UserService } from "../../../src/users/services/UserService";
import { User } from "../../../src/users/models/User";

const setMock = jest.fn();
const getMock = jest.fn();

jest.mock('node-cache', () => {
  return jest.fn().mockImplementation(() => {
      return {
        set: () => setMock(),
        get: () => getMock(),
      }
    })
})

jest.mock('uuid', () => ({
  v4: jest.fn(() => '675b9b3f-9035-4fc8-a390-49de1010b20f'),
}));

jest.mock('../../../src/users/models/User', () => ({
  User: jest.fn().mockImplementation((id, name, email, age) => ({ id, name, email, age }))
}));

describe('UserService', () => {
  let sut: UserService;

  const newUserMock = {
    id: '',
    name: 'luciano',
    email: 'lucho@gmail.com',
    age: 28
  }

  beforeEach(() => {
    sut = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('Shoud create a user successfully', () => {
    const getAllUserSpy = jest.spyOn(sut, 'getUsers');
    getAllUserSpy.mockReturnValue([]);
    sut.createUser(newUserMock.name, newUserMock.email, newUserMock.age);

    expect(getAllUserSpy).toHaveBeenCalledTimes(1);
    expect(setMock).toHaveBeenCalledTimes(1);
    expect(User).toHaveBeenCalledTimes(1);
    expect(User).toHaveBeenCalledWith('675b9b3f-9035-4fc8-a390-49de1010b20f', newUserMock.name, newUserMock.email, newUserMock.age);
  });

  it('should throw BadRequestException if user with email already exists', () => {
    try {
      const getAllUserSpy = jest.spyOn(sut, 'getUsers');
      getAllUserSpy.mockReturnValue([newUserMock]);
      sut.createUser(newUserMock.name, newUserMock.email, newUserMock.age);
    } catch (error: any) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBe(`User with email ${ newUserMock.email } already exists`)
      expect(setMock).not.toHaveBeenCalled();
    }
  });

});