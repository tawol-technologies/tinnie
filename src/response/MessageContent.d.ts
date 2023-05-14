import { IResponseFormat } from './ResponseService';
export default class {
    static notFound(prefix: string): string;
    static created(prefix: string): string;
    static updated(prefix: string): string;
    static EXISTING: string;
    static fileTypeError(fileType: string): string;
    static NO_FILE_SELECTED: string;
    static buildError: (error: any) => IResponseFormat;
}
//# sourceMappingURL=MessageContent.d.ts.map