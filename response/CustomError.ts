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
        status ?? error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static alreadyExist() {
    return new CustomError(ResponseMessage.ALREADY_EXIST, HttpStatus.CONFLICT);
  }

  static notExist() {
    return new CustomError(ResponseMessage.NOT_EXIST, HttpStatus.CONFLICT);
  }

  static restricted() {
    return new CustomError(ResponseMessage.RESTRICTED, HttpStatus.FORBIDDEN);
  }
}
