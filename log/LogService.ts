/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

export enum LogType {
  INFO, WARN, ERROR
}

export const Logger = {
  log(msg: any, type?: LogType) {
    const date = new Date();

    switch (type) {
      case LogType.ERROR:
        return console.error(date + ': ' + msg);
      case LogType.INFO:
        return console.info(date + ': ' + msg);
      case LogType.WARN:
        return console.warn(date + ': ' + msg);
      default:
        return console.log(date + ': ' + msg);
    }
  },
  error(error: any) {
    process.env.NODE_ENV === 'production' && console.error(error);
  },
  info(info: any) {
    process.env.NODE_ENV !== 'production' && console.info(info);
  },
};

export const LogService = Logger;
