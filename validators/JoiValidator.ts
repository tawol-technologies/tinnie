import {CustomHelpers, LanguageMessages} from 'joi';
import {ErrorMessage} from '../enums/ErrorMessage';

export class JoiValidator {
  static getFieldName(helper: CustomHelpers) {
    return helper.state.path? helper.state.path[0] : 'FIELD_NAME';
  }

  static sendMessage(msg: string, helper: CustomHelpers) {
    return helper.message(
      (this.getFieldName(helper) + ': '+ msg) as unknown as LanguageMessages
    );
  }

  static validateNumber(length: number, value: string, helper: CustomHelpers) {
    const num = Number.parseInt(value);
    if (num.toString().length !== length) {
      return JoiValidator.sendMessage(ErrorMessage.WRONG_PIN + length, helper);
    }
    return value;
  }

  static postalCode(value: string, helper: CustomHelpers) {
    return JoiValidator.validateNumber(6, value, helper);
  }

  static pin(value: string, helper: CustomHelpers) {
    return JoiValidator.validateNumber(4, value, helper);
  }

  static phoneNumber(value: string, helper: CustomHelpers) {
    const match = value.match(/\d/g);
    if (!match || match.length < 9) {
      return JoiValidator.sendMessage(ErrorMessage.WRONG_PHONE_NUMBER, helper);
    }
    return value;
  }

  static gender(value: string, helper: CustomHelpers) {
    if (value.length === 6 || value.length === 4) {
      return value;
    }
    return JoiValidator.sendMessage(ErrorMessage.GENDER_LENGTH, helper);
  }
}
