import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';
import bcrypt from 'bcrypt';
import User from '@models/user.model';

export class UserService {
  private salt = 10;
  private async readUsers(): Promise<void> {}

  async getAllUsers() {
    return this.readUsers();
  }

  async getUserById(i) {
    return this.readUsers();
  }

  async regUser(email: string, password: string): Promise<void> {
    const checkUser = await User.findOne({ where: { email: email } });
    if (checkUser) throw new HttpException(404, ExceptionType.DB_USER_CREATE_NOT_CREATED)

    const hashPassword = await bcrypt.hash(password, this.salt);
    const user = await User.create({ email: email, password: hashPassword });
  }

  async loginUser() {}

  async logoutUser() {}
}
