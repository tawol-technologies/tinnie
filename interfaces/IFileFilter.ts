import {FileTypeEnum} from '../enums/FileTypeEnum';

export interface IFileFilter {
    type: FileTypeEnum,
    fieldName: string;
}
