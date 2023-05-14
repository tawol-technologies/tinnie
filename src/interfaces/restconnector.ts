import {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import {HttpStatus} from '../response/HttpStatus';

export interface IExchangeConfig<T> extends AxiosRequestConfig<T> {
    url: string;
}

export interface IResponseOtherPayload<T> {
    config: AxiosRequestConfig<T>;
    headers: AxiosRequestHeaders;
    statusText: string;
    request?: any;
}

export interface IExchangeCallback<T> {
    onSuccess?(data?: T, status?: HttpStatus, others?: IResponseOtherPayload<T>): void;
    onFailure?(reason: any): void;
}
