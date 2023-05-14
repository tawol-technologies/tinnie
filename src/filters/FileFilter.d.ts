/// <reference types="multer" />
import { Request } from 'express';
import { IFileError } from '../interfaces/IFileProcessing';
export default class {
    static buildError(message: string, file: Express.Multer.File): IFileError;
    /**
       *  Accept only images
       *
       * @param {Request} _req
       * @param {File} file
       * @param {Function} callback
       * @return {any}
       */
    static image(_req: Request, file: Express.Multer.File, callback: (...args: any) => void): any;
    /**
       *  Accept only videos
       *
       * @param {Request} _req
       * @param {File} file
       * @param {Function} callback
       * @return {any}
       */
    static video(_req: Request, file: Express.Multer.File, callback: (...args: any) => void): any;
    /**
       *  Accept only doc
       *
       * @param {Request} _req
       * @param {File} file
       * @param {Function} callback
       * @return {any}
       */
    static doc(_req: Request, file: Express.Multer.File, callback: (...args: any) => void): any;
    /**
       *  Accept only spreadsheet
       *
       * @param {Request} _req
       * @param {File} file
       * @param {Function} callback
       * @return {any}
       */
    static spreadsheet(_req: Request, file: Express.Multer.File, callback: (...args: any) => void): any;
}
//# sourceMappingURL=FileFilter.d.ts.map