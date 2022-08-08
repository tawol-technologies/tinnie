import {HttpStatus} from './HttpStatus';
import {ResponseBuilder} from './ResponseBody';

export default class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }

  static get(error: any | Error, status?: number): ResponseBuilder {
    return ResponseBuilder.singleton.custom(
        true, error.message as string, null,
        status ?? error.status ?? HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}
