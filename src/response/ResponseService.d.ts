import { NextFunction, Response } from 'express';
import CustomError from './CustomError';
import { ResponseBuilder } from './ResponseBody';
import ResponseError from './ResponseError';
export interface IResponseFormat<T = any> {
    error?: boolean;
    status?: string;
    data?: T;
    message: string;
    statusCode?: number;
}
export declare const ResponseService: {
    sendError(response: Response, error: ResponseError | any): void;
    throwError(next: NextFunction, error: CustomError | ResponseError | any): void;
    sendSuccess(response: Response, data: IResponseFormat): void;
    json(response: Response, data: any, status: number): void;
    raw(response: Response, data: any, status: number): void;
    builder(response: Response, body: ResponseBuilder): void;
};
//# sourceMappingURL=ResponseService.d.ts.map