import nodemailer from 'nodemailer';
export class MailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 1,
      port: 2,
      secure: false,
      auth: {},
    });
  }
  async sendActivationMail(to, link) {}
}
