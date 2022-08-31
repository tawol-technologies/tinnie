import {DiscountTargetType, DiscountType} from '../enums/DiscountEnum';
import {ResponseBuilder} from '../response/ResponseBody';
import {ResponseMessage} from '../response/ResponseMessage';

export const getDiscountTypes = (): ResponseBuilder => {
  const data = Object.values(DiscountType);
  return ResponseBuilder.singleton.ok(ResponseMessage.DATA_FETCHED, data);
};

export const getDiscountTargetTypes = (): ResponseBuilder => {
  const data = Object.values(DiscountTargetType);
  return ResponseBuilder.singleton.ok(ResponseMessage.DATA_FETCHED, data);
};
