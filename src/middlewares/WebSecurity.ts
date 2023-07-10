import {NextFunction, Request, Response} from 'express';
import string from '../others/string';
import {ResponseBuilder} from '../response/ResponseBody';
import {ResponseMessage} from '../response/ResponseMessage';
import {ResponseService} from '../response/ResponseService';
import {TCustomTokenVerificationCallback} from '../types/validators';
import JwtValidator from '../validators/JwtValidator';
import { checkClientServiceAccess } from './internalServiceAuthorizationMiddleware';

export default class WebSecurity {
  private whitelistPaths: string[];
  private tokenKey: string;
  private cookieKey: string;
  private tokenHeaderKey = 'Authorization';
  private secretHeaderKey = 'x-secret-key';
  customTokenVerification: TCustomTokenVerificationCallback | undefined;

  constructor(
      whitelistPath: string[],
      tokenKey: string,
      cookieKey: string) {
    this.whitelistPaths = whitelistPath;
    this.tokenKey = tokenKey;
    this.cookieKey = cookieKey;
  }

  authenticate = (req: Request, res: Response, next: NextFunction) => {
    // Give access to unblocked APIs
    if (string.isUrlMatch(this.whitelistPaths, req.path)) {
      return next();
    }

    try {
      const cookieToken = req.signedCookies[this.cookieKey];
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

        if (this.customTokenVerification) {
          this.customTokenVerification(token);
        } else {
          JwtValidator.verifyToken(token, this.tokenKey);
        }
      } else {
        if (this.customTokenVerification) {
          this.customTokenVerification(cookieToken);
        } else {
          JwtValidator.verifyToken(cookieToken, this.tokenKey);
        }
      }
      return next();
    } catch (error) {
      return ResponseService.sendError(res, error);
    }
  };

  getSecretKeyValue = (req: Request) => {
    return req.headers[this.secretHeaderKey] as string;
  };

  clientServiceAuthentication = (req: Request, res: Response, next: NextFunction) => {
    return checkClientServiceAccess(req, res, next, this.whitelistPaths);
  }
}

