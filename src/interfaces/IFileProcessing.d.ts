import { FileTypeEnum } from '../enums/FileTypeEnum';
export interface IFileFilter {
    type?: FileTypeEnum;
    fieldName: string;
}
export interface IFileError {
    message: string;
    originalName: string;
    fieldName: string;
}
//# sourceMappingURL=IFileProcessing.d.ts.map