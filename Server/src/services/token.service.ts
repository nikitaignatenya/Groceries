import { JWT_REFRESH_SECRET, JWT_ACCESS_SECRET } from '@config/dotenv.config';
import jwt from 'jsonwebtoken';

export class TokenService {
  public generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    };
  }

  public validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  public validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }
}
