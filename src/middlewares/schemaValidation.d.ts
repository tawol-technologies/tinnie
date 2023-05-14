import { Request, Response, NextFunction } from 'express';
export declare const schemaValidationMDW: (schema: Joi.Schema, type?: 'body' | 'params' | 'query') => (req: Request, _res: Response, next: NextFunction) => void;
export declare const schemaMulterValidationMDW: (schema: Joi.Schema, key?: string) => (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=schemaValidation.d.ts.map