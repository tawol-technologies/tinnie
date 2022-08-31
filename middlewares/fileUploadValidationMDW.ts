import {NextFunction, Request, RequestHandler, Response} from 'express';
import FileFilter from '../filters/FileFilter';
import {FileTypeEnum} from '../enums/FileTypeEnum';
import {HttpStatus} from '../response/HttpStatus';

export const getFileFilter = (fileType: FileTypeEnum) => {
  switch (fileType) {
    case FileTypeEnum.IMAGE:
      return FileFilter.image;
    case FileTypeEnum.VIDEO:
      return FileFilter.video;
    case FileTypeEnum.DOC:
    case FileTypeEnum.PDF:
      return FileFilter.doc;
    case FileTypeEnum.SPREADSHEET:
      return FileFilter.spreadsheet;
    default:
      break;
  }
};

export const resBuilder = (fieldName: string, message: string): string => {
  return fieldName.toUpperCase() + ': ' + message;
};


const doMulterFilter = (
    _multer: RequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
    isLastIndex: boolean) => {
  _multer(req, res, (error: any) => {
    if (error) {
      error.message = resBuilder(error.fieldName ?? error.field, error.message);
      error.status = HttpStatus.BAD_REQUEST;
      next(error);
    } else {
      if (isLastIndex) {
        next();
      }
      return;
    }
  });
};

export function fileUploadValidationMDW(
    _multer: RequestHandler,
    req: Request,
    res: Response,
    next: NextFunction) {
  doMulterFilter(_multer, req, res, next, true);
  return;
}

export function fileUploadValidationsMDW(
    _multers: RequestHandler[],
    req: Request,
    res: Response,
    next: NextFunction) {
  for (const _multer of _multers) {
    if (_multers.lastIndexOf(_multer) === (_multers.length-1)) {
      doMulterFilter(_multer, req, res, next, true);
      return;
    } else {
      doMulterFilter(_multer, req, res, next, false);
    }
  }
}
