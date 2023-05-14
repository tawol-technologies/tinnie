import { IMailingRequest } from '../interfaces/mailing';
export default class Mailing {
    private static headers;
    private static requestSender;
    static sendPlain(payload: IMailingRequest): void;
    static sendPlainAttachment(payload: IMailingRequest): void;
    static sendHTML(payload: IMailingRequest): void;
    static sendHTMLAttachment(payload: IMailingRequest): void;
}
//# sourceMappingURL=Mailing.d.ts.map