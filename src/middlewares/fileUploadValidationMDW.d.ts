import { NextFunction, Request, RequestHandler, Response } from 'express';
import FileFilter from '../filters/FileFilter';
import { FileTypeEnum } from '../enums/FileTypeEnum';
export declare const getFileFilter: (fileType: FileTypeEnum) => typeof FileFilter.image;
export declare const resBuilder: (fieldName: string, message: string) => string;
export declare function fileUploadValidationMDW(_multer: RequestHandler, req: Request, res: Response, next: NextFunction): void;
export declare function fileUploadValidationsMDW(_multers: RequestHandler[], req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=fileUploadValidationMDW.d.ts.map