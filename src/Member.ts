import { User } from './User.js';

class Member extends User {
  static totalMembers = 0;

  constructor(firstName: string, lastName: string, userId: number) {
    super(firstName, lastName, userId);
    Member.totalMembers++;
  }
}
