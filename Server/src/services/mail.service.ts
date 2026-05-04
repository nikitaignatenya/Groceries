import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_PASSWORD, SMTP_USER, API_URL } from '@config/dotenv.config';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';

export class MailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: SMTP_USER,
        to,
        subject: 'Активация аккаунта Groceries',
        test: '',
        html: `
                  <div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                  </div>
                  `,
      });
    } catch (error) {
      throw new HttpException(404, { id: 1, message: `${error}` });
    }
  }
}
