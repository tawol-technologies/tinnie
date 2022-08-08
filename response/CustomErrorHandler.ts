import {Request, Response} from 'express';
import CustomError from './CustomError';
import {ResponseService} from './ResponseService';

const CustomErrorHandler = (err: unknown, _req: Request, res: Response) => {
  ResponseService.builder(res, CustomError.get(err));
};
export default CustomErrorHandler;
