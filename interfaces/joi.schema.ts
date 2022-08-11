import Joi from 'joi';

export interface IPageableQuery {
    page: number;
    size: number;
}
export const PageableJoiSchema = Joi.object<IPageableQuery>({
  page: Joi.string(),
  size: Joi.string(),
});
