import {IResponseFormat} from '../response/ResponseService';

export default abstract class {
  static async create?(
        payload: any,
        ...others: any): Promise<IResponseFormat>;
  static async delete?(
        id: string,
        ...others: any): Promise<IResponseFormat>;
  static async update?(
      payload: any,
        ...others: any): Promise<IResponseFormat>;
  static async getAll?(): Promise<IResponseFormat>;
}
