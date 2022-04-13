import {Request} from 'express';
import MessageContent from '../response/MessageContent';

export default class {
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
      return callback(new Error(MessageContent.fileTypeError('image')), false);
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
      return callback(new Error(MessageContent.fileTypeError('video')), false);
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
      return callback(new Error(MessageContent.fileTypeError('document')), false);
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
      return callback(new Error(MessageContent.fileTypeError('spreadsheet')), false);
    }
    return callback(null, true);
  }
}
