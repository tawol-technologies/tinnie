/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

export enum LogType {
  INFO, WARN, ERROR
}

export const Logger = {
  log(msg: any, ins?: ClassDecorator, type?: LogType) {
    const date = new Date();

    switch (type) {
      case LogType.ERROR:
        return console.error(`${ins? ins.name : 'Floor-Logger'}: ${date}:: ${msg}`);
      case LogType.INFO:
        return console.info(`${ins? ins.name : 'Floor-Logger'}: ${date}:: ${msg}`);
      case LogType.WARN:
        return console.warn(`${ins? ins.name : 'Floor-Logger'}: ${date}:: ${msg}`);
      default:
        return console.log(`${ins? ins.name : 'Floor-Logger'}: ${date}:: ${msg}`);
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
