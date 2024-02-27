import { IOtpReq, IOtpValidateReq, IsendVerificationLinkReq as ISendVerificationLinkReq, IsendEmailReq, ISmsReq, IWhatsappReq} from "../interfaces/notification";
import RestConnector from "../others/RestConnector";
import ResponseBuilder from "../response/ResponseBody";

export default class Notification {
    private notificationToken: string;
    private notificationEndpoint: string;

    constructor(notificationToken: string, notificationEndpoint: string) {
        this.notificationEndpoint = notificationEndpoint;
        this.notificationToken = notificationToken;
    }

    sendOTP(payload: IOtpReq) {
        return RestConnector.exchangePromise<IOtpReq, ResponseBuilder>({
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
        return RestConnector.exchangePromise<IOtpValidateReq, ResponseBuilder>({
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
    sendSms(payload: ISmsReq) {
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

    sendWhatsapp(payload:IWhatsappReq) {
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
