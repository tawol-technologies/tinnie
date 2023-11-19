import { OtpMediumEnum } from "../enums/NotificationEnum";

export interface IOtp {
  email: string;
  phoneNumber: number;
}

export interface IOtpReq {
  otpLength: number;
  email: string;
  sender: string;
  senderEmail: string;
  phoneNumber: string;
  whatsappLine: string;
  medium: OtpMediumEnum[];
  purpose: string;
  expireInMins: number;
  customerName: string;
  otp?: number;
}

export interface IOtpValidateReq {
  senderEmail: string;
  purpose: string;
  otp: number;
  reference: string;
}

export interface IsendVerificationLinkReq {
    expireInMins : number,
    email: string,
    purpose: string,
    customerName: string,
    sender: string,
    senderEmail: string,
    redirectUrl: string,
}

export interface ISmsReq {
  from?: string;
  text: string;
  to: string;
  subject?: string;
};
