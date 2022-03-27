import {IResponseFormat} from '../response/ResponseService';

export default abstract class {
  static create?(
        entity: any,
        ...others: any): IResponseFormat | any;
  static delete?(
        id: string,
        ...others: any): IResponseFormat | any;
  static update?(
      id: string,
      entity: any,
        ...others: any): IResponseFormat | any;
}
