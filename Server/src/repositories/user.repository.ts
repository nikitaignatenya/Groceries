import { ExceptionType } from '@exceptions/exceptions.type';
import { HttpException } from '@exceptions/HttpException';
import User from '@models/user.model';
export class UserRepository {
  public async regUSer(email: string, hashPassword: string, activationLink: string) {
    try {
      const checkUser = await User.findOne({ where: { email: email } });
      if (checkUser) throw new HttpException(404, ExceptionType.DB_USER_CREATE_NOT_CREATED);
      const user = await User.create({ email: email, password: hashPassword, activatedLink: activationLink });
      return user;
    } catch (error) {
      throw new HttpException(404, ExceptionType.DB_USER_CREATE_NOT_CREATED);
    }
  }
}
