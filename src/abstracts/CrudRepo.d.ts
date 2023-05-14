export default abstract class<T, Q = Record<string, unknown>> {
    abstract save(entity: T): any;
    saveAll?(entities: T[]): any;
    abstract update(id: string, entity: T | any, otherData?: any): any;
    softDelete?(id: string, otherData?: any): any;
    delete?(id: string, otherData?: any): any;
    abstract getById?(id: string, otherData?: any): any;
    abstract getAll(query: Q, page: number, size: number, otherData?: any): any;
    find?(query: Record<string, any>, otherData?: any): Promise<Array<T> | null>;
    findOne?(query: Record<string, any>, otherData?: any): any;
}
//# sourceMappingURL=CrudRepo.d.ts.map