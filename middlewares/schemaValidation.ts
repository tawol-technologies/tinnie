import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import ResponseError from '../response/ResponseError';
import {ResponseService} from '../response/ResponseService';

export const schemaValidationMDW = (schema: Joi.Schema,
    type?: 'body' | 'params' | 'query') =>
  (req: Request, res: Response, next: NextFunction) => {
    let reqData;
    switch (type) {
      case 'body':
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
          new ResponseError(error.details[0].message, 400));
      return;
    }
    reqData;
    next();
    return;
  };

