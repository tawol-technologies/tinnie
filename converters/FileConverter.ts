import DataUriParser from 'datauri/parser';
import path from 'path';

export default class {
  private static dataUriParser = new DataUriParser();

  public static parseDataUri(file: Express.Multer.File) {
    return this.dataUriParser.format(path.extname(file.originalname), file.buffer);
  }
}
