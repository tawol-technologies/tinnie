import CustomError from '../response/CustomError';
import {HttpStatus} from '../response/HttpStatus';

export default class FileOperation {
  static getFile(files: any, key: string, msg?: string): Express.Multer.File {
    const fileIns = files[key] && files[key][0];
    if (!fileIns) {
      throw new CustomError(msg ?? key.toUpperCase() + ' file is required', HttpStatus.BAD_REQUEST);
    }
    return fileIns;
  }
}
