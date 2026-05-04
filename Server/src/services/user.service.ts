import { UserRepository } from '@repositories/user.repository';
import { MailService } from '@services/mail.service';
import { TokenService } from './token.service';
import { TokenRepository } from '@repositories/token.repository';
import { UserDto } from '@dtos/user.dto';
import { iUser } from '@interfaces/user.model.interface';
import bcrypt from 'bcrypt';
import uuid from 'uuid';

export class UserService {
  private salt = 10;
  public userRepository = new UserRepository();
  public mailService = new MailService();
  private tokenService = new TokenService();
  private tokenRepository = new TokenRepository();

  public async getAllUsers() {
    const users = await this.userRepository.getAllUsers();
    return users;
  }
  async getUserById(id) {
    const user = await this.userRepository.getUserById(id);
    return user;
  }

  async regUser(email: string, password: string): Promise<iUser> {
    const hashPassword = await bcrypt.hash(password, this.salt);
    const activationLink = uuid.v4();
    await this.mailService.sendActivationMail(email, activationLink);
    const user = await this.userRepository.regUser(email, hashPassword, activationLink);

    const userDto = new UserDto(user);
    const tokens = this.tokenService.generateTokens({ ...userDto });
    await this.tokenRepository.saveToken(userDto.id, tokens.refreshToken);
    console.log(user);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async loginUser() {}

  async logoutUser() {}
}
