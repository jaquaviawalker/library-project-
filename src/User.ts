export class User {
  firstName: string;
  lastName: string;
  protected userId: number;

  constructor(firstName: string, lastName: string, userId: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userId = userId;
  }

  public getInfo(): void {
    console.log(`Name: ${this.firstName} ${this.lastName}
                ID: ${this.userId}`);
  }
}
