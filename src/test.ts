import { OtpMediumEnum } from "./enums/NotificationEnum";
import Notification from "./notification/Notification";

const notification = new Notification('NjQ2MjgzZmE2ZDI2ZmY0NDY2ZWEzMDYyOlUyRnNkR1ZrWDE5UGpnV1JBQStnTTNzekZlNzFzMmRwbFFpWTNSSHR6Q1JzZVowNVZRK1VwMVVKN0ZuMVdvV1Vra2p6dzNDUmk0VmpQcmlZMTJLZnZONjNwbG1nelRiT3RzQUlCYU5MS2dnSFBuc01OalJXWHJ1TzAxNXk4YzNDYW9RNE10TmJmK01QdUMvYnhyOUVBd0ZPRlZOb1dyZzRuZFhXOTB3NHZTZz0=', 'sandbox.tawol-tech.com:8002/notification-service/v1');
notification.sendOTP({
    "otpLength": 4,
    "medium": [OtpMediumEnum.EMAIL],
    "email": "ayomide.oyediran@tawol-tech.com",
    "purpose": "VERIFICATION",
    "expireInMins": 5,
    "customerName": "Ayomide",
    "sender": "SavePro",
    "senderEmail": "notifications@tawol-tech.com",
    "phoneNumber": '2348130000000',
    whatsappLine: '2348130000000'
}, (res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

notification.validateOTP({
    "otp": 3202,
    "purpose": "VERIFICATION",
    "senderEmail": "notifications@tawol-tech.com",
    "reference": "a2b59183-2b7b-46f1-8a27-ed1401d8166c"
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
