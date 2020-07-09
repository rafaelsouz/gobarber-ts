import nodemailer from 'nodemailer';

import IMailProvider from '../models/IMailProvider';

export default class EtherealMailProvider implements IMailProvider {
  constructor() {
    const account = nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: 'smyp',
    });
  }

  public async sendMail(to: string, body: string): Promise<void> {}
}
