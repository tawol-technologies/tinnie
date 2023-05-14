import {NextFunction, Request, Response} from 'express';
import Joi from 'joi';
import {PageableJoiSchema} from '../interfaces/joi.schema';
import {schemaValidationMDW} from './schemaValidation';

export const pageableValidationMDW = (querySchema: Joi.Schema) =>
  (req: Request, _res: Response, next: NextFunction) => {
    schemaValidationMDW(querySchema, 'body')(req, _res, next);
    schemaValidationMDW(PageableJoiSchema, 'query');
  };
