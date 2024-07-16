import NodeCache from 'node-cache';
import { v4 as uuidv4 } from 'uuid';

import { BadRequestException, NotFoundException } from '../../common/exceptions';
import { User } from '../models/User';

const nodeCache = new NodeCache({ stdTTL: 600000, checkperiod: 600000 });
export class UserService {
  
  public createUser(name: string, email: string, age: number): User {
    const allUsers = this.getUsers();

    const userExists = allUsers.find((user: User) => user.email === email);

    if (userExists) {
      throw new BadRequestException(`User with email ${ email } already exists`);
    }

    const user = new User(uuidv4(), name, email, age);

    allUsers.push(user);

    nodeCache.set<string>('users', JSON.stringify(allUsers));

    return user;
  }

  public getUsers(): User[] {
    const cachedUsers = nodeCache.get<string>('users');
    const users = cachedUsers ? JSON.parse(cachedUsers) : [] ;

    return users;
  }

  public getUserById(id: string): User {
    const users = this.getUsers();

    const user = users.find((user: User) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${ id } not found`);
    }

    return user;
  }

  public updateUser(id: string, data: Partial<User>): User {
    const users = this.getUsers();

    let user = this.getUserById(id);

    // Update user data
    user = { 
      ...user, 
      ...data 
    };

    // Save updated user
    const allUsers = users.filter((user: User) => user.id !== id);
    allUsers.push(user);
    nodeCache.set('users', JSON.stringify(allUsers));

    return user;
  }

  public deleteUser(id: string): boolean {
    const allUsers = this.getUsers();

    const user = allUsers.find((user: User) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${ id } not found`);
    }

    nodeCache.set<string>('users', JSON.stringify(allUsers.filter((user: User) => user.id !== id)));

    return true;
  }

}