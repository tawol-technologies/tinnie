import { IOtpReq, IOtpValidateReq } from "../interfaces/notification";
import RestConnector from "../others/RestConnector";

export default class Notification {
    notificationToken: string;
    notificationEndpoint: string;

    constructor(notificationToken: string, notificationEndpoint: string) {
        this.notificationEndpoint = notificationEndpoint;
        this.notificationToken = notificationToken;
    }

    sendOTP(payload: IOtpReq, onSuccess: (payload: any) => void, onFailure: (reason: any) => void) {
        RestConnector.exchange({
            url: `${this.notificationEndpoint}/otp/get-otp`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.notificationToken}`,
            },
        },
        {
            onSuccess: onSuccess,
            onFailure: onFailure
        }
        )
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
        },
        {
            onSuccess: () => {
                console.log('OTP sent successfully');
            },
            onFailure: (reason: any) => {
                console.log(reason.response)
            }
        }
        )
    }
}