export declare enum LogType {
    INFO = 0,
    WARN = 1,
    ERROR = 2
}
export declare const Logger: {
    log(msg: any, type?: LogType): void;
    error(error: any): void;
    info(info: any): void;
};
export declare const LogService: {
    log(msg: any, type?: LogType): void;
    error(error: any): void;
    info(info: any): void;
};
//# sourceMappingURL=LogService.d.ts.map