import {IMailingRequest} from '../interfaces/mailing';
import RestConnector from '../others/RestConnector';
import {defaultSender, MailingConfigs} from './mailing.config';

export default class Mailing {
  private static headers = {
    [MailingConfigs.HEADER_KEY]: MailingConfigs.HEADER_VALUE,
  };

  private static requestSender(url: string, payload: IMailingRequest) {
    if (!payload.sender) {
      payload.sender = defaultSender;
    }

    RestConnector.exchange({
      method: 'POST',
      url: url,
      data: payload,
      headers: this.headers,
    }, {});
  }

  static sendPlain(payload: IMailingRequest) {
    this.requestSender(MailingConfigs.PLAIN_EVENT_URL, payload);
  }

  static sendPlainAttachment(payload: IMailingRequest) {
    this.requestSender(MailingConfigs.PLAIN_ATTACHMENT_URL, payload);
  }

  static sendHTML(payload: IMailingRequest) {
    this.requestSender(MailingConfigs.HTML_EVENT_URL, payload);
  }

  static sendHTMLAttachment(payload: IMailingRequest) {
    this.requestSender(MailingConfigs.HTML_ATTACHMENT_URL, payload);
  }
}
