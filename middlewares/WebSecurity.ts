import {NextFunction, Request, Response} from 'express';
import string from '../others/string';
import {ResponseBuilder} from '../response/ResponseBody';
import {ResponseMessage} from '../response/ResponseMessage';
import {ResponseService} from '../response/ResponseService';
import {TAdditionalCheck, TCustomTokenVerificationCallback} from '../types/validators';
import JwtValidator from '../validators/JwtValidator';

export default class WebSecurity {
  whitelistPaths: string[];
  tokenKey: string;
  cookieKey: string;
  tokenHeaderKey = 'Authorization';
  secretHeaderKey = 'x-secret-key';
  customTokenVerification: TCustomTokenVerificationCallback | undefined;
  additionalCheck?: TAdditionalCheck;

  constructor(
      whitelistPath: string[],
      tokenKey: string,
      cookieKey: string,
      additionalcheck?: TAdditionalCheck) {
    this.whitelistPaths = whitelistPath;
    this.tokenKey = tokenKey;
    this.cookieKey = cookieKey;
    this.additionalCheck = additionalcheck;
  }

  getTokenData(token: string) {
    if (this.customTokenVerification) {
      return this.customTokenVerification(token);
    } else {
      return JwtValidator.verifyToken(token, this.tokenKey);
    }
  }

  authenticate = (req: Request, res: Response, next: NextFunction) => {
    // Give access to unblocked APIs
    if (string.isUrlMatch(this.whitelistPaths, req.path)) {
      return next();
    }

    try {
      const cookieToken = req.signedCookies[this.cookieKey];
      let tokenData;
      if (!cookieToken) {
        const bearerVal = req.headers[this.tokenHeaderKey] as string;
        if (!bearerVal || !bearerVal.startsWith('Bearer ')) {
          return ResponseService.builder(
              res,
              ResponseBuilder.getInstance().unauthorized(ResponseMessage.BEARER_AUTH_REQUIRED)
          );
        }
        const token = bearerVal.substring(7);
        if (!token) {
          return ResponseService.builder(
              res,
              ResponseBuilder.getInstance().unauthorized(ResponseMessage.TOKEN_REQUIRED)
          );
        }

        tokenData = this.getTokenData(token);
      } else {
        tokenData = this.getTokenData(cookieToken);
      }
      this.additionalCheck && this.additionalCheck(tokenData, req);
      return next();
    } catch (error) {
      return ResponseService.sendError(res, error);
    }
  };

  getSecretKeyValue = (req: Request) => {
    return req.headers[this.secretHeaderKey] as string;
  };
}

