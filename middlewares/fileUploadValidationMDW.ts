import {NextFunction, Request, RequestHandler, Response} from 'express';
import FileFilter from '../filters/FileFilter';
import MessageContent from '../response/MessageContent';
import {ResponseService} from '../response/ResponseService';
import {FileTypeEnum} from '../enums/FileTypeEnum';
import {HttpStatus} from '../response/HttpStatus';
import {LogService} from '../log/LogService';

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
  return fieldName.toUpperCase() + ':   ' + message;
};


const doMulterFilter = (
    _multer: RequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
    isLastIndex: boolean) => {
  _multer(req, res, (err: any) => {
    const fieldName = req.file?.fieldname ?? 'NO_FILE';
    if (err) {
      LogService.error(err);
      err.message = resBuilder(fieldName, err.message);
      ResponseService.sendError(res, err);
    } else if (!req.file && req.files?.length === 0) {
      ResponseService.sendError(res, {
        message: resBuilder(fieldName, MessageContent.NO_FILE_SELECTED),
        status: HttpStatus.BAD_REQUEST,
      });
      return;
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
      // return;
    } else {
      doMulterFilter(_multer, req, res, next, false);
    }
  }
}
