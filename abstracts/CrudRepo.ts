export default abstract class<T, Q = Record<string, unknown>> {
  abstract save(entity: T): any;
  saveAll?(entities: T[]): any;
  abstract update(id: string, entity: T | any): any;
  softDelete?(id: string): any;
  delete?(id: string): any;
  abstract getById?(id: string): any;
  abstract getAll(query: Q, page: number, size: number): any;
  find?(query: Record<string, any>): Promise<Array<T> | null>;
  findOne?(query: Record<string, any>): any;
}
