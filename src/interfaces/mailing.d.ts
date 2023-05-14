export interface IMailingRequest {
    to: string;
    cc?: string;
    bcc?: string;
    message: string;
    sender?: string;
    subject: string;
    file?: any;
}
export interface IMailingVerificationArg {
    email: string;
    url: string;
    token: string;
    sender?: string;
    subject?: string;
}
//# sourceMappingURL=mailing.d.ts.map