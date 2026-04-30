import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';
import { UserRepository } from '@repositories/user.repository';
import { MailService } from '@services/mail.service';
import { TokenService } from './token.service';
import { UserDto } from '@dtos/user.dto';
import User from '@models/user.model';
import bcrypt from 'bcrypt';
import uuid from 'uuid';
import { log } from 'node:console';

export class UserService {
  private salt = 10;
  public userRepository = new UserRepository();
  public mailService = new MailService();
  private tokenService = new TokenService();

  private async readUsers(): Promise<void> {}

  async getAllUsers() {
    return this.readUsers();
  }

  async getUserById(id) {
    return this.readUsers();
  }

  async regUser(email: string, password: string) {
    const hashPassword = await bcrypt.hash(password, this.salt);
    const activationLink = uuid.v4();
    await this.mailService.sendActivationMail(email, activationLink);
    const tokens = this.tokenService.generateTokens('any');

    const user = await this.userRepository.regUSer(email, hashPassword, activationLink);
    console.log(user);

    return user;
  }

  async loginUser() {}

  async logoutUser() {}
}
