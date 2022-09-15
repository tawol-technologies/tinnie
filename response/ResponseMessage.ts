/* eslint-disable no-unused-vars */
export enum ResponseMessage {
    ACCOUNT_UPDATED = 'Account updated',
    BUSINESS_PROFILE_UPDATED = 'Business profile updated',
    CREATED = 'Successfully created',
    ERROR = 'Internal server error',
    ALREADY_EXIST = 'Already exist',
    NOT_EXIST = 'Not exist',
    ACCESS_DENIED = 'Access denied',
    UNAUTHORIZED = 'Unathorized',
    PIN_CREATED = 'Pin created successfully',
    WRONG_PIN = 'Invalid pin',
    WRONG_PASSWORD = 'Invalid Password',
    PIN_ALREADY_CREATED = 'Pin was previously created',
    PIN_CHANGED = 'Pin changed successfully',
    PASSWORD_RESET = 'Your Password has been updated',
    PASSWORD_CHANGED = 'Password changed successfully',
    RECENT_PASSWORD = 'You can\'t use a recently used password',
    LOGIN_SUCCEED = 'Login successful',
    INVALID_CREDENTIALS = 'Invalid credential',
    BEARER_AUTH_REQUIRED = 'Authorization does not start with Bearer',
    TOKEN_REQUIRED = 'Token Required',
    INVALID_TOKEN = 'Invalid token',
    EXPIRED_TOKEN = 'Token expired',
    USERNAME_NOT_FOUND = 'Username not found',
    BAD_DATA = 'Incompatible data sent. Check your payload, params or path variables',
    TRANSACTION_COMPLETED_INITIALLY = 'Transaction completed initially',
    TRANSACTION_COMPLETED = 'Transaction completed',
    INVALID_REFERENCE = 'Invalid Reference',
    PAYMENT_NOT_ACCEPTABLE = 'Integrity of your payment cannot be proved',
    UNIMPLEMENTED_FEATURE = 'Feature not implemented',
    INSUFFICIENT_FUND = 'Insufficient Fund',
    DATA_FETCHED = 'Data Fetched',
    OTP_SENT = 'OTP sent, kindly check your email',
    BUSINESS_NOT_MATCHED = 'Business not found on the user profile',
    NOT_INITIATE_RESET_PASSWORD = 'You have not intiate password reset',
    LOGO_REQUIRED = 'Logo file is required',
    CAC_DOC_REQUIRED = 'Corporate Affair Commission document is required',
    TIN_DOC_REQUIRED = 'Tax Identification Number document is required',
    OK = 'Successful',
    OTP_NOT_FOUND = 'Otp not found',
    REGISTERED = 'Account successfully registered, check your email for verification',
    RESTRICTED = '',
}
