import { IExchangeCallback as IExchangeHandler, IExchangeConfig } from '../interfaces/restconnector';
export default class RestConnector {
    static exchange<T>(config: IExchangeConfig<T>, handlers: IExchangeHandler<T>): void;
    static exchangeAsync<T>(config: IExchangeConfig<T>, handlers: IExchangeHandler<T>): Promise<void>;
}
//# sourceMappingURL=RestConnector.d.ts.map