import {ResponseBuilder} from '../response/ResponseBody';

export default abstract class {
  static async create?(
      payload: any,
      others?: any): Promise<ResponseBuilder>;
  static async delete?(
      id: string,
      others?: any): Promise<ResponseBuilder>;
  static async update?(
      id: string,
      payload: any,
      others?: any): Promise<ResponseBuilder>;
  static async getAll?(
      query: Record<string, unknown> | any,
      page: number,
      size: number,
      others?: any): Promise<ResponseBuilder>;
  static async getOne?(
      id: string,
      others?: any): Promise<ResponseBuilder>;
}
