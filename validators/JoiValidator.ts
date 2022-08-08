import {CustomHelpers, LanguageMessages} from 'joi';
import {ErrorMessage} from '../enums/ErrorMessage';

export class JoiValidator {
  static validateNumber(length: number, value: string, helper: CustomHelpers) {
    const num = Number.parseInt(value);
    if (num.toString().length !== length) {
      return helper.message((ErrorMessage.WRONG_PIN + length) as unknown as LanguageMessages);
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
