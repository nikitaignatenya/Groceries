import { ExceptionTypeUser } from '@exceptions/userExceptions.type';
import { HttpException } from '@exceptions/HttpException';
import Token from '@models/user-models/token.model';
export class TokenRepository {
  public async saveToken(userId: number, refreshToken: string) {
    try {
      const tokenData = await Token.findOne({ where: { userId: userId } });
      if (!tokenData) {
        const token = await Token.create({ userId: userId, refreshToken: refreshToken });
        return token.save();
      } else {
        await Token.update({ refreshToken: refreshToken }, { where: { userId: userId } });
        return await tokenData.save();
      }
    } catch (error) {
      throw new HttpException(404, ExceptionTypeUser.DB_USER_TOKEN_GET_NOT_GOT);
    }
  }
  public async removeToken(refreshToken: string) {
    try {
      const token = await Token.findOne({ where: { refreshToken: refreshToken } });
      if (token) {
        return await Token.destroy({ where: { refreshToken: refreshToken } });
      } else throw new HttpException(404, ExceptionTypeUser.DB_USER_TOKEN_GET_NOT_GOT);
    } catch (error) {
      throw new HttpException(404, ExceptionTypeUser.DB_USER_TOKEN_GET_NOT_GOT);
    }
  }
  public async findRefreshToken(refreshToken: string) {
    try {
      const token = await Token.findOne({ where: { refreshToken: refreshToken } });
      if (!token) throw new HttpException(404, ExceptionTypeUser.DB_USER_TOKEN_GET_NOT_GOT);
      return token;
    } catch (error) {
      throw new HttpException(404, ExceptionTypeUser.DB_USER_TOKEN_GET_NOT_GOT);
    }
  }
  public async findAccessToken(refreshToken: string) {
    try {
      const token = await Token.findOne({ where: { refreshToken: refreshToken } });
      if (!token) throw new HttpException(404, ExceptionTypeUser.DB_USER_TOKEN_GET_NOT_GOT);
      return token;
    } catch (error) {
      throw new HttpException(404, ExceptionTypeUser.DB_USER_TOKEN_GET_NOT_GOT);
    }
  }
}
