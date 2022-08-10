import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import {HttpStatus} from '../response/HttpStatus';
import ResponseError from '../response/ResponseError';

export const schemaValidationMDW = (schema: Joi.Schema,
    type?: 'body' | 'params' | 'query') =>
  (req: Request, _res: Response, next: NextFunction) => {
    let reqData;
    type = type ?? 'body';
    switch (type) {
      case 'body':
        reqData = req.body;
        break;
      case 'params':
        reqData = req.params;
        break;
      case 'query':
        reqData = req.query;
        break;
      default:
        reqData = req.body;
        break;
    }
    const {error} = schema.validate(reqData);
    if (error) {
      next(new ResponseError(error.details[0].message + ` in the ${type}`, HttpStatus.BAD_REQUEST));
    }
    reqData;
    next();
    return;
  };

export const schemaValidationWithFileMDW = (
    schema: Joi.Schema,
    formdataKey: string) =>
  (req: Request, res: Response, next: NextFunction) => {
    // const reqData = JSON.parse(req.body[formdataKey]);
    // const {error} = schema.validate(reqData, {convert: true});
    // if (error) {
    //   ResponseService.sendError(res,
    //       new ResponseError(error.details[0].message + ` in the Formdata`, 400));
    //   return;
    // }
    // reqData;
    next();
    return;
  };

