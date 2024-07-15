export class User {
  public id: string;
  public name: string;
  public email: string;
  public age: number;

  constructor(id: string, name: string, email: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

}