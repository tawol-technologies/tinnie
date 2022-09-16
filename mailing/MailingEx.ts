import {MailingSubject} from '../enums/MailingSubject';
import {IMailingVerificationArg} from '../interfaces/mailing';
import Mailing from './Mailing';

export default class MailingEx extends Mailing {
  static verificationLink(arg: IMailingVerificationArg) {
    const html = `<html><a href=${arg.url}?t=${arg.token}>Click to verify</a></html>`;
    this.sendHTML({
      to: arg.email,
      subject: arg.subject ?? MailingSubject.ACCOUNT_VERIFICATION,
      message: html,
      sender: arg.sender,
    });
  }
}
