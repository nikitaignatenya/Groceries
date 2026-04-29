import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';

export class UserService {
  private async readUsers(): Promise<void> {}

  async getAllUsers() {
    return this.readUsers();
  }

  async getUserById(i) {
    return this.readUsers();
  }

  async regUser() {}

  async loginUser() {}

  async logoutUser() {}
}
