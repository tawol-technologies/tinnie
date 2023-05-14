import { ResponseBuilder } from '../response/ResponseBody';
export default abstract class {
    static create?(payload: any, others?: any): Promise<ResponseBuilder>;
    static delete?(id: string, others?: any): Promise<ResponseBuilder>;
    static update?(id: string, payload: any, others?: any): Promise<ResponseBuilder>;
    static getAll?(query: Record<string, unknown> | any, page: number, size: number, others?: any): Promise<ResponseBuilder>;
    static getOne?(id: string, others?: any): Promise<ResponseBuilder>;
}
//# sourceMappingURL=CrudService.d.ts.map