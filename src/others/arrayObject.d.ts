interface IObjectFound<T = any> {
    index: number;
    data: T;
}
export default class {
    static findObject<T = any>(data: Record<string, unknown>[], key: string, value: unknown): IObjectFound<T> | undefined;
}
export {};
//# sourceMappingURL=arrayObject.d.ts.map