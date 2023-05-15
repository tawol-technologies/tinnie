export declare enum DateResponseType {
    SEC = 0,
    MIN = 1,
    HR = 2,
    DAY = 3,
    MONTH = 4
}
export default class {
    static convertUTC(utc: number, returnType: DateResponseType): number;
    static subtract(base: Date, operand: Date, returnType: DateResponseType): number;
}
//# sourceMappingURL=date.d.ts.map