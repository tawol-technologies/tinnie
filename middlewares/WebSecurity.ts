import {NextFunction, Request, Response} from 'express';
import string from '../others/string';
import CustomError from '../response/CustomError';
import {HttpStatus} from '../response/HttpStatus';
import {ResponseMessage} from '../response/ResponseMessage';
import {ResponseService} from '../response/ResponseService';
import {TAdditionalCheck, TCustomTokenVerificationCallback} from '../types/validators';
import JwtValidator from '../validators/JwtValidator';

export default class WebSecurity {
  whitelistPaths: string[];
  tokenKey: string;
  cookieKey: string;
  tokenHeaderKey = 'Authorization';
  accessHeaderKey = 'x-api-key';
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

  getTokenData(token?: string, req?: Request) {
    token = token ?? (req ? this.getToken(req) : '');
    if (this.customTokenVerification) {
      return this.customTokenVerification(token);
    } else {
      return JwtValidator.verifyToken(token, this.tokenKey);
    }
  }

  getToken(req: Request): string {
    let token = req.signedCookies[this.cookieKey];
    if (!token) {
      const bearerVal = req.headers[this.tokenHeaderKey] as string;
      if (!bearerVal || !bearerVal.startsWith('Bearer ')) {
        throw new CustomError(ResponseMessage.BEARER_AUTH_REQUIRED, HttpStatus.UNAUTHORIZED);
      }
      token = bearerVal.substring(7);
      if (!token) {
        throw new CustomError(ResponseMessage.TOKEN_REQUIRED, HttpStatus.UNAUTHORIZED);
      }
    }
    return token;
  }

  authenticate = (req: Request, res: Response, next: NextFunction) => {
    // Give access to unblocked APIs
    if (string.isUrlMatch(this.whitelistPaths, req.originalUrl)) {
      return next();
    }

    try {
      const tokenData = this.getTokenData(this.getToken(req));
      this.additionalCheck && this.additionalCheck(tokenData, req);
      return next();
    } catch (error) {
      return ResponseService.sendError(res, error);
    }
  };

  getSecretKeyValue = (req: Request) => {
    return req.headers[this.secretHeaderKey] as string;
  };

  getApiKeyValue = (req: Request) => {
    return req.headers[this.accessHeaderKey] as string;
  };
}

