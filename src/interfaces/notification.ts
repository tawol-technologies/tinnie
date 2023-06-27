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
