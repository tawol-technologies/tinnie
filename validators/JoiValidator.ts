import {CustomHelpers, LanguageMessages} from 'joi';
import {ErrorMessage} from './ErrorMessage';

export class JoiValidator {
  static validateNumber(length: number, value: string, helper: CustomHelpers) {
    const num = Number.parseInt(value);
    if (num.toString().length !== length) {
      return helper.message(ErrorMessage.INCOMPLETE_POST_CODE as unknown as LanguageMessages);
    }
    return value;
  }
  static postalCode(value: string, helper: CustomHelpers) {
    return JoiValidator.validateNumber(6, value, helper);
  }

  static pin(value: string, helper: CustomHelpers) {
    return JoiValidator.validateNumber(4, value, helper);
  }
}
