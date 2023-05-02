/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
export enum ErrorMessage {
    INCOMPLETE_POST_CODE = 'Postal code should be 6 digit length',
    WRONG_PIN = 'The length shoud be ',
    WRONG_PHONE_NUMBER = 'Must be a valid phone number',
    GENDER_LENGTH = 'Gender can only be 4 or 6 character long',
    MUST_BE_PERCENTAGE = 'Percentage must be number between 0 and 100',
    MUST_BE_COUPON_CODE = 'Coupon code must be alphanumeric characters only',
    NOT_VALID_EMAIL = 'Email address must be alphanumeric characters with either underscore(_), @ or period(.) only',
    PASSWORD_NOT_COMPATIBLE = 'Password must be at least 8 and can include letters, numbers and either _, @ or .',
    OTP_NOT_COMPATIBLE = 'OTP must be at least 4 and can only be digits',
    UUID_NOT_COMPATIBLE = 'UUID must be 32 characters length and can only be alphanumeric and hyphen',
}
