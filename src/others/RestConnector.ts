import axios from 'axios';
import {IExchangeCallback as IExchangeHandler, IExchangeConfig} from '../interfaces/restconnector';
import {LogService} from '../log/LogService';

export default class RestConnector {
  static exchange<T>(config: IExchangeConfig<T>, handlers: IExchangeHandler<T>) {
    LogService.info(`Calling URL :: ${config.url}\n PAYLOAD:: `);
    LogService.info(config.data);
    axios(config).then((res) => {
      handlers.onSuccess && handlers.onSuccess(res.data, res.status, {...res});
    }).catch((reason) => {
      handlers.onFailure && handlers.onFailure(reason);
    }).finally(() => {
      LogService.info(`Exchange Completed on URL :: ${config.url}`);
    });
  }
  static async exchangeAsync<T>(config: IExchangeConfig<T>, handlers: IExchangeHandler<T>) {
    LogService.info(`Calling URL :: ${config.url}\n PAYLOAD:: `);
    LogService.info(config.data);
    await axios(config).then((res:any) => {
      handlers.onSuccess && handlers.onSuccess(res.data, res.status, {...res});
    }).catch((reason) => {
      handlers.onFailure && handlers.onFailure(reason);
    }).finally(() => {
      LogService.info(`Exchange Completed on URL :: ${config.url}`);
    });
  }
  static async exchangePromise<T>(config: IExchangeConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      LogService.info(`Calling URL :: ${config.url}\n PAYLOAD:: `);
      LogService.info(config.data);
      axios(config).then((res:any) => {
        resolve(res);
      }).catch((reason) => {
        reject(reason);
      }).finally(() => {
        LogService.info(`Exchange Completed on URL :: ${config.url}`);
      });
    });
  }
}
