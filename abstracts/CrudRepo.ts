export default abstract class<T> {
  create?(entity: T): Promise<T | null>;
  update?(id: string, entity: T): Promise<T | null>;
  delete?(id: string): Promise<T | null>;
  getById?(id: string): Promise<T | null>;
  getAll?(): Promise<Array<T> | null>;
  find?(query: Record<string, any>): Promise<Array<T> | null>;
  findOne?(query: Record<string, any>): Promise<T | null>;
}
