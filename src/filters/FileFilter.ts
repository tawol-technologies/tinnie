import {Request} from 'express';
import {IFileError} from '../interfaces/IFileProcessing';
import MessageContent from '../response/MessageContent';

export default class {
  static buildError(message: string, file: Express.Multer.File): IFileError {
    return {
      message: message,
      fieldName: file.fieldname,
      originalName: file.originalname,
    };
  }

  /**
     *  Accept only images
     *
     * @param {Request} _req
     * @param {File} file
     * @param {Function} callback
     * @return {any}
     */
  static image(_req: Request, file: Express.Multer.File, callback: (...args: any) => void): any {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      return callback(this.buildError(MessageContent.fileTypeError('image'), file), false);
    }
    return callback(null, true);
  }
  /**
     *  Accept only videos
     *
     * @param {Request} _req
     * @param {File} file
     * @param {Function} callback
     * @return {any}
     */
  static video(_req: Request, file: Express.Multer.File, callback: (...args: any) => void): any {
    if (!file.originalname.match(/\.(mp4|MP4)$/)) {
      return callback(this.buildError(MessageContent.fileTypeError('video'), file), false);
    }
    return callback(null, true);
  }
  /**
     *  Accept only doc
     *
     * @param {Request} _req
     * @param {File} file
     * @param {Function} callback
     * @return {any}
     */
  static doc(_req: Request, file: Express.Multer.File, callback: (...args: any) => void): any {
    if (!file.originalname.match(/\.(doc|DOC|docx|DOCX|pdf|PDF)$/)) {
      return callback(this.buildError(MessageContent.fileTypeError('document'), file), false);
    }
    return callback(null, true);
  }
  /**
     *  Accept only spreadsheet
     *
     * @param {Request} _req
     * @param {File} file
     * @param {Function} callback
     * @return {any}
     */
  static spreadsheet(
      _req: Request,
      file: Express.Multer.File,
      callback: (...args: any) => void): any {
    if (!file.originalname.match(/\.(xls|XLS|xlsx|XLSX)$/)) {
      return callback(this.buildError(MessageContent.fileTypeError('spreadsheet'), file), false);
    }
    return callback(null, true);
  }
}
