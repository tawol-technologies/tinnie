/* eslint-disable no-unused-vars */
export enum HttpStatus {
    // SUCCESSFUL
    OK = 200,
    CREATED = 201,
    SMTP_OK = 250,

    // CLIENT ERROR
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    EXPECTATION_FAILED = 417,
    UNPROCESSIBLE_ENTITY = 422,

    // SERVER ERROR
    INTERNAL_SERVER_ERROR = 500,
}
