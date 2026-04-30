import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';
import { JWT_REFRESH_SECRET, JWT_ACCESS_SECRET } from '@config/dotenv.config';
import jwt from 'jsonwebtoken';
import Token from '@models/token.model';
import { buildResponse } from '@helpers/response';

export class TokenService {
  public async refreshToken() {}
  public async activateToken() {}
  public generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    };
  }
  public async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken: refreshToken } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    } else {
      const token = await Token.create({ userId: userId, refreshToken: refreshToken });
    }
  }
}
