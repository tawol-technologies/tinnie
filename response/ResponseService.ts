import {Response} from 'express';
import ResponseError from './ResponseError';

export interface IResponseFormat<T = any> {
  error?: boolean;
  status?: string;
  data?: T;
  message: string;
  statusCode?: number;
}

const responseFormat = (error: boolean, data: any, message: string): IResponseFormat => ({
  error, data, message, status: error ? 'failed' : 'success',
});

export const ResponseService = {
  sendError(response: Response, error: ResponseError | any) {
    response.status(error.status ?? 500)
        .json(responseFormat(true, null, error.message));
  },

  sendSuccess(response:Response, data: IResponseFormat) {
    response.status(data.statusCode ?? 200)
        .json(responseFormat(false, data.data, data.message));
  },

  json(response: Response, data: any, status: number) {
    response.status(status).json(responseFormat(false, data, ''));
  },

  raw(response: Response, data: any, status: number) {
    response.status(status).send(data);
  },

};
