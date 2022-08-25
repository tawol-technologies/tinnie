import cl, {UploadApiOptions} from 'cloudinary';
import {ICloudinaryConfig} from '../interfaces/IFileProcessing';
import {LogService} from '../log/LogService';

export default class {
  private cloudinary = cl.v2;
  private uploadOptions: UploadApiOptions = {
    use_filename: false,
    unique_filename: true,
    overwrite: true,
  };

  constructor(config: ICloudinaryConfig) {
    this.cloudinary.config(config);
    this.uploadOptions.folder = config.folder;
  }


  public cloudinaryUpload = async (file?: string, options?: UploadApiOptions): Promise<string> => {
    if (!file) {
      throw new Error('File to upload not found');
    }
    const result = await this.cloudinary.uploader.upload(file, {...this.uploadOptions, options});
    LogService.log(file + ' successfully uploaded');
    return result.public_id;
  };
}
