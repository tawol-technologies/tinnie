import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import ResponseError from '../response/ResponseError';
import {ResponseService} from '../response/ResponseService';

export const schemaValidationMDW = (schema: Joi.Schema,
    type?: 'body' | 'params' | 'query') =>
  (req: Request, res: Response, next: NextFunction) => {
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
      ResponseService.sendError(res,
          new ResponseError(error.details[0].message + ` in the ${type}`, 400));
      return;
    }
    reqData;
    next();
    return;
  };

