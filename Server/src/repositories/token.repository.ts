import Token from '@models/token.model';
export class TokenRepository {
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
