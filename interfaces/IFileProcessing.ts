import {ConfigOptions} from 'cloudinary';
import {FileTypeEnum} from '../enums/FileTypeEnum';

export interface IFileFilter {
    type?: FileTypeEnum,
    fieldName: string;
}

export interface IFileError {
    message: string;
    originalName: string;
    fieldName: string;
}

export interface ICloudinaryConfig extends Partial<ConfigOptions> {
    api_key: string;
    cloud_name: string;
    api_secret: string;
    folder?: string;
}
