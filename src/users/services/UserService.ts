import NodeCache from 'node-cache';
import { User } from '../models/User';
import { NotFoundException } from '../../common/exceptions';

const nodeCache = new NodeCache({ stdTTL: 600000, checkperiod: 600000 });
export class UserService {
  
  public createUser(name: string, email: string, age: number): User {
    // Todo: Agregar uuid para generar los ids

    const user = new User('12', name, email, age);

    const v = nodeCache.set<string>('users', JSON.stringify([user]));

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