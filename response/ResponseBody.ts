import {HttpStatus} from './HttpStatus';
import {ResponseMessage} from './ResponseMessage';

export class ResponseBuilder {
  hasError: boolean;
  message: string;
  data: any;
  statusCode: number;
  static instance: ResponseBuilder;

  constructor() {
    this.hasError = false;
    this.message = '';
    this.data = null;
    this.statusCode = HttpStatus.OK;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ResponseBuilder();
    }
    return this.instance;
  }

  custom(hasError: boolean, message: string, data: any, statusCode: HttpStatus) {
    this.hasError = hasError;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
    return this;
  }

  ok(message?: string, data?: any): ResponseBuilder {
    this.hasError = false;
    this.message = message ?? ResponseMessage.OK;
    this.data = data;
    this.statusCode = HttpStatus.OK;
    return this;
  }

  error(message?: string, data?: any): ResponseBuilder {
    this.hasError = true;
    this.message = message == null? ResponseMessage.ERROR : message;
    this.data = data;
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    return this;
  }

  created(message?: string, data?: any): ResponseBuilder {
    this.hasError = false;
    this.message = message == null? ResponseMessage.CREATED : message;
    this.data = data;
    this.statusCode = HttpStatus.CREATED;
    return this;
  }

  alreadyExist(data?: any): ResponseBuilder {
    this.hasError = true;
    this.message = ResponseMessage.ALREADY_EXIST;
    this.data = data;
    this.statusCode = HttpStatus.CONFLICT;
    return this;
  }

  accessDenied(): ResponseBuilder {
    this.hasError = true;
    this.message = ResponseMessage.ACCESS_DENIED;
    this.data = null;
    this.statusCode = HttpStatus.FORBIDDEN;
    return this;
  }

  conflict(message: string): ResponseBuilder {
    this.hasError = false;
    this.message = message;
    this.data = null;
    this.statusCode = HttpStatus.CONFLICT;
    return this;
  }

  badRequest(message: string): ResponseBuilder {
    this.hasError = true;
    this.message = message;
    this.data = null;
    this.statusCode = HttpStatus.BAD_REQUEST;
    return this;
  }

  unauthorized(message: string): ResponseBuilder {
    this.hasError = true;
    this.message = message;
    this.data = null;
    this.statusCode = HttpStatus.UNAUTHORIZED;
    return this;
  }
}

const ResponseBody = ResponseBuilder;
export default ResponseBody;
