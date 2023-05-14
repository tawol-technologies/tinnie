import { HttpStatus } from './HttpStatus';
export declare class ResponseBuilder {
    hasError: boolean;
    message: string;
    data: any;
    statusCode: number;
    static instance: ResponseBuilder;
    constructor();
    static getInstance(): ResponseBuilder;
    custom(hasError: boolean, message: string, data: any, statusCode: HttpStatus): this;
    ok(message?: string, data?: any): ResponseBuilder;
    error(message?: string, data?: any): ResponseBuilder;
    created(message?: string, data?: any): ResponseBuilder;
    alreadyExist(data?: any): ResponseBuilder;
    accessDenied(): ResponseBuilder;
    conflict(message: string): ResponseBuilder;
    badRequest(message: string): ResponseBuilder;
    unauthorized(message: string): ResponseBuilder;
}
//# sourceMappingURL=ResponseBody.d.ts.map