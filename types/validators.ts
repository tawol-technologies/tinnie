import {Request} from 'express';

export type TVerifyTokenCallback = (jwtPayload: any) => boolean;
export type TCustomTokenVerificationCallback = (token: string) => void;
export type TAdditionalCheck = (tokenData: any, req: Request) => void;
