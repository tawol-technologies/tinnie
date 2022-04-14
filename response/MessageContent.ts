import {IResponseFormat} from './ResponseService';
export default class {
  static notFound(prefix: string) {
    return prefix + ' not found';
  }
  static created(prefix: string) {
    return prefix + ' successfully created';
  }
  static updated(prefix: string) {
    return prefix + ' successfully updated';
  }
  static EXISTING = 'Already exist';
  static fileTypeError(fileType: string) {
    return `Only ${fileType} files are allowed!`;
  }
  static NO_FILE_SELECTED = 'Please select a file to upload';
  static buildError = (error: any):IResponseFormat => {
    return {
      message: error.message,
      statusCode: error.statusCode,
      error: true,
    };
  };
}
