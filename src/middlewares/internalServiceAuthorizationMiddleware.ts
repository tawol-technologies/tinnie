import { NextFunction, Request, Response } from "express";
import RestConnector from "../others/RestConnector";
import { ResponseMessage } from "../response/ResponseMessage";
import { ResponseBuilder } from "../response/ResponseBody";
import string from "../others/string";

export const checkClientServiceAccess = async (req: Request, _res: Response, next: NextFunction, whitelistPaths?: string[]) => {
  // Give access to unblocked APIs
  if (whitelistPaths && string.isUrlMatch(whitelistPaths, req.path)) {
    return next();
  }
  
  if (!req.headers.authorization) {
    next(ResponseBuilder.getInstance().badRequest(ResponseMessage.MISSING_CREDENTIALS));
    return;
  }
  const token = req.headers.authorization.substring(6);
  const service = process.env.SERVICE_NAME;
  await RestConnector.exchangeAsync({
    url: `${process.env.AUTHENTICATION_ENDPOINT}?token=${token}&serviceName=${service}`,
  }, {
    onSuccess: () => {
        next();
    },
    onFailure: (reason:any) => {
      console.log(reason.response)
        next(ResponseBuilder.getInstance().badRequest(reason.response.data.message));
    },
  });
  return;
  };
  