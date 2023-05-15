import { NextFunction, Request, Response } from 'express';
import { TCustomTokenVerificationCallback } from '../types/validators';
export default class WebSecurity {
    whitelistPaths: string[];
    tokenKey: string;
    cookieKey: string;
    tokenHeaderKey: string;
    secretHeaderKey: string;
    customTokenVerification: TCustomTokenVerificationCallback | undefined;
    constructor(whitelistPath: string[], tokenKey: string, cookieKey: string);
    authenticate: (req: Request, res: Response, next: NextFunction) => void;
    getSecretKeyValue: (req: Request) => string;
}
//# sourceMappingURL=WebSecurity.d.ts.map