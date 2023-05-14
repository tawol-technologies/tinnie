export default class ResponseError extends Error {
    status: number;
    static responseError: ResponseError;
    static NOT_FOUND: number;
    static BAD_REQUEST: number;
    static INTERNAL_SERVER_ERROR: number;
    constructor(message: string, status?: number);
    static get(error: any | Error, status?: number): ResponseError;
}
//# sourceMappingURL=ResponseError.d.ts.map