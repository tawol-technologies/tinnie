import jwt, {TokenExpiredError} from 'jsonwebtoken';
import {HttpStatus} from '../response/HttpStatus';
import ResponseError from '../response/ResponseError';
import {ResponseMessage} from '../response/ResponseMessage';

export default class {
  static verifyToken = (token: string, tokenKey: string) => {
    try {
      return jwt.verify(token, tokenKey);
    } catch (error: any) {
      let msg = ResponseMessage.INVALID_TOKEN;
      if (error instanceof TokenExpiredError) {
        msg = ResponseMessage.EXPIRED_TOKEN;
      }
      throw new ResponseError(msg, HttpStatus.BAD_REQUEST);
    }
  };
}
