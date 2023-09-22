import { IOtpReq, IOtpValidateReq, IsendVerificationLinkReq as ISendVerificationLinkReq, IsendEmailReq } from "../interfaces/notification";
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

    sendEmailRequest(payload: IsendEmailReq) {
        return RestConnector.exchangePromise({
            url: `${this.notificationEndpoint}/emailing/html`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.notificationToken}`,
            },
        });
    }
}