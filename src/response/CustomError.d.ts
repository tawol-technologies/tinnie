import { ResponseBuilder } from './ResponseBody';
export default class CustomError extends Error {
    status: number;
    constructor(message: string, status: number);
    static get(error: any | Error, status?: number): ResponseBuilder;
    static alreadyExist(): CustomError;
    static notExist(): CustomError;
    static restricted(message?: any): CustomError;
    static badRequest(message?: any): CustomError;
}
//# sourceMappingURL=CustomError.d.ts.map