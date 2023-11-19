import { IOtpReq, IOtpValidateReq, IsendVerificationLinkReq as ISendVerificationLinkReq, ISmsReq } from "../interfaces/notification";
import RestConnector from "../others/RestConnector";

export default class Notification {
    private notificationToken: string;
    private notificationEndpoint: string;

    constructor(notificationToken: string, notificationEndpoint: string) {
        this.notificationEndpoint = notificationEndpoint;
        this.notificationToken = notificationToken;
    }

    sendOTP(payload: IOtpReq) {
        return RestConnector.exchangePromise({
            url: `${this.notificationEndpoint}/otp/get-otp`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.notificationToken}`,
            },
        });
    }

    validateOTP(payload: IOtpValidateReq) {
        return RestConnector.exchangePromise({
            url: `${this.notificationEndpoint}/otp/validate-otp`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.notificationToken}`,
            },
        });
    };

    sendVerificationLink(payload: ISendVerificationLinkReq) {
        return RestConnector.exchangePromise({
            url: `${this.notificationEndpoint}/verifier/send-link`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.notificationToken}`,
            },
        });
    }

    sendEmail(payload: ISmsReq) {
        return RestConnector.exchangePromise({
            url: `${this.notificationEndpoint}/sms/sendSms`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.notificationToken}`
            }
        })
    }

    sendWhatsapp(payload:any) {
        return RestConnector.exchangePromise({
            url: `${this.notificationEndpoint}/whatsapp/send`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.notificationToken}`
            }
        })
    }

// to work on the push notification
    pushNotification(){

    }
}
