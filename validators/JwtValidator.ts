import jwt, {TokenExpiredError} from 'jsonwebtoken';
import {TVerifyTokenCallback} from '../types/validators';
import {HttpStatus} from '../response/HttpStatus';
import ResponseError from '../response/ResponseError';
import {ResponseMessage} from '../response/ResponseMessage';

export default class {
  static verifyToken = (token: string, tokenKey: string, extraCheck?: TVerifyTokenCallback) => {
    try {
      const data = jwt.verify(token, tokenKey);
      if (extraCheck !== undefined && !extraCheck(data)) {
        throw new ResponseError(ResponseMessage.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
      }
    } catch (error: any) {
      let msg = ResponseMessage.INVALID_TOKEN;
      if (error instanceof TokenExpiredError) {
        msg = ResponseMessage.EXPIRED_TOKEN;
      } else if (error.status && error.message) {
        throw error;
      }
      throw new ResponseError(msg, HttpStatus.BAD_REQUEST);
    }
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
