import { ExceptionType } from '@exceptions/exceptions.type';
import { HttpException } from '@exceptions/HttpException';
import User from '@models/user.model';
import { iUserAttributes } from '@interfaces/user.model.interface';
export class UserRepository {
  public async regUser(email: string, hashPassword: string, activationLink: string): Promise<iUserAttributes> {
    try {
      const checkUser = await User.findOne({ where: { email: email } });
      if (checkUser) {
        throw new HttpException(409, { id: 1, message: '1' });
      } else {
        const user = await User.create({ email: email, password: hashPassword, activatedLink: activationLink });
        return user;
      }
    } catch (error) {
      throw new HttpException(404, { id: 1, message: '2' });
    }
  }
}
