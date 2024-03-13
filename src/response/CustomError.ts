import {HttpStatus} from './HttpStatus';
import {ResponseBuilder} from './ResponseBody';
import {ResponseMessage} from './ResponseMessage';

export default class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }

  static get(error: any | Error, status?: number): ResponseBuilder {
    return ResponseBuilder.getInstance().custom(
        true, error.message as string, null,
        status ?? error.status ?? error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static alreadyExist() {
    return new CustomError(ResponseMessage.ALREADY_EXIST, HttpStatus.CONFLICT);
  }

  static notExist() {
    return new CustomError(ResponseMessage.NOT_EXIST, HttpStatus.CONFLICT);
  }

  static restricted(message?: any) {
    return new CustomError(message ?? ResponseMessage.RESTRICTED, HttpStatus.FORBIDDEN);
  }

  static badRequest(message?: any) {
    return new CustomError(message ?? ResponseMessage.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
}
