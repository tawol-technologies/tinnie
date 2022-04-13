import {NextFunction, Request, RequestHandler, Response} from 'express';
import FileFilter from '../filters/FileFilter';
import MessageContent from '../response/MessageContent';
import {ResponseService} from '../response/ResponseService';
import {FileTypeEnum} from '../enums/FileTypeEnum';

export const getFileFilter = (fileType: FileTypeEnum) => {
  switch (fileType) {
    case FileTypeEnum.IMAGE:
      return FileFilter.image;
    case FileTypeEnum.VIDEO:
      return FileFilter.video;
    case FileTypeEnum.DOC:
      return FileFilter.doc;
    case FileTypeEnum.SPREADSHEET:
      return FileFilter.spreadsheet;
    default:
      break;
  }
};

export default function fileUploadValidationMDW(
    _multer: RequestHandler,
    req: Request,
    res: Response,
    next: NextFunction) {
  _multer(req, res, (err: any) => {
    if (err) {
      ResponseService.sendError(res, err);
      next(err);
      return;
    } else if (!req.file) {
      ResponseService.sendError(res, {
        message: MessageContent.NO_FILE_SELECTED,
        status: 400,
      });
      next(err);
      return;
    } else {
      next();
      return;
    }
  });
}
