import { ExceptionType } from '@exceptions/exceptions.type';
import { HttpException } from '@exceptions/HttpException';
import User from '@models/user.model';
import { iUserAttributes } from '@interfaces/user.model.interface';
import { log } from 'node:console';
export class UserRepository {
  public async getAllUsers(): Promise<iUserAttributes[]> {
    try {
      const users = await User.findAll();
      if (users.length) {
        return users;
      } else throw new HttpException(404, ExceptionType.DB_USERS_GET_NOT_GOT);
    } catch (error) {
      throw new HttpException(404, ExceptionType.DB_USERS_GET_NOT_GOT);
    }
  }

  public async getUserById(id: number): Promise<iUserAttributes> {
    try {
      const user = await User.findOne({ where: { id: id } });
      if (user) {
        return user;
      } else {
        throw new HttpException(404, ExceptionType.DB_USER_GET_BY_ID_NOT_GOT);
      }
    } catch (error) {
      throw new HttpException(404, ExceptionType.DB_USER_GET_BY_ID_NOT_GOT);
    }
  }

  public async regUser(email: string, hashPassword: string, activationLink: string): Promise<iUserAttributes> {
    try {
      const checkUser = await User.findOne({ where: { email: email } });
      if (checkUser) {
        throw new HttpException(409, ExceptionType.DB_USER_ALREADY_EXISTS);
      } else {
        const user = await User.create({ email: email, password: hashPassword, activatedLink: activationLink });

        return user;
      }
    } catch (error) {
      throw new HttpException(404, ExceptionType.DB_USER_CREATE_NOT_CREATED);
    }
  }
  public async activate(activatedLink: string) {
    try {
      const user = await User.findOne({ where: { activatedLink: activatedLink } });
      if (user) {
        user.update({ isActivated: true }, { where: { activatedLink: activatedLink } });
        user.save();
      } else {
        throw new HttpException(404, ExceptionType.DB_USERS_GET_NOT_GOT);
      }
      return user;
    } catch (error) {
      throw new HttpException(404, ExceptionType.DB_USERS_GET_NOT_GOT);
    }
  }
  public async loginUser(email: string) {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) throw new HttpException(404, ExceptionType.DB_USER_EMAIL_NOT_FOUND);
      return user;
    } catch (error) {
      throw new HttpException(404, ExceptionType.DB_USER_GET_BY_EMAIL_NOT_GOT);
    }
  }
}
