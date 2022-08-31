import {NextFunction, Request, Response} from 'express';
import string from '../others/string';
import {ResponseBuilder} from '../response/ResponseBody';
import {ResponseMessage} from '../response/ResponseMessage';
import {ResponseService} from '../response/ResponseService';
import JwtValidator from '../validators/JwtValidator';

export default class extends JwtValidator {
  static WHITELIST_PATHS = [];
  static TOKEN_KEY = '';
  static COOKIE_KEY = '';
  static TOKEN_HEADER_KEY = 'Authorization';

  static authenticate = (req: Request, res: Response, next: NextFunction) => {
    // Give access to unblocked APIs
    if (string.isUrlMatch(this.WHITELIST_PATHS, req.path)) {
      return next();
    }

    try {
      const cookieToken = req.signedCookies[this.COOKIE_KEY];
      if (!cookieToken) {
        const bearerVal = req.headers[this.TOKEN_HEADER_KEY] as string;
        if (!bearerVal || !bearerVal.startsWith('Bearer ')) {
          return ResponseService.builder(
              res,
              ResponseBuilder.singleton.unauthorized(ResponseMessage.BEARER_AUTH_REQUIRED)
          );
        }
        const token = bearerVal.substring(7);
        if (!token) {
          return ResponseService.builder(
              res,
              ResponseBuilder.singleton.unauthorized(ResponseMessage.TOKEN_REQUIRED)
          );
        }

        this.verifyToken(token, this.TOKEN_KEY);
      } else {
        this.verifyToken(cookieToken, this.TOKEN_KEY);
      }
      return next();
    } catch (error) {
      return ResponseService.sendError(res, error);
    }
  };
}

