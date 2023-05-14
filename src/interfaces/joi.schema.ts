import Joi from 'joi';
import {JoiValidator} from '../validators/JoiValidator';

export interface IPageableQuery {
    page: number;
    size: number;
}
export const PageableJoiSchema = Joi.object<IPageableQuery>({
  page: Joi.string(),
  size: Joi.string(),
});
export const IDJoiSchema = Joi.object({
  id: Joi.custom(JoiValidator.ObjectId).required(),
});
