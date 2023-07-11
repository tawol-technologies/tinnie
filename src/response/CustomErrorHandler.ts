import {NextFunction, Request, Response} from 'express';
import {LogService, LogType} from '../log/LogService';
import CustomError from './CustomError';
import {ResponseService} from './ResponseService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomErrorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  LogService.log(err, undefined, LogType.ERROR);
  return ResponseService.builder(res, CustomError.get(err));
};
export default CustomErrorHandler;
