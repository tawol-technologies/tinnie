import { IOtpReq, IOtpValidateReq } from "../interfaces/notification";
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
    }
}