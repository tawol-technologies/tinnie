import {CustomHelpers, LanguageMessages} from 'joi';
import {ErrorMessage} from '../enums/ErrorMessage';
import {isValidObjectId} from 'mongoose';

export class JoiValidator {
  static getFieldName(helper: CustomHelpers) {
    return helper.state.path? helper.state.path[0] : 'FIELD_NAME';
  }

  static sendMessage(msg: string, helper: CustomHelpers) {
    return helper.message(
      (this.getFieldName(helper) + ': '+ msg) as unknown as LanguageMessages,
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

  static NGNPhoneNumber(value: string, helper: CustomHelpers) {
    const match = value.match(/234\d{10}/g);
    if (!match) {
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

  static percentage(value: number, helper: CustomHelpers) {
    if (value < 0 || value > 100) {
      return JoiValidator.sendMessage(ErrorMessage.MUST_BE_PERCENTAGE, helper);
    }
    return value;
  }

  static couponCode(value: string, helper: CustomHelpers) {
    const match = value.match(/^[a-zA-Z0-9]*/g);
    if (!match || match[0].length < 6) {
      return JoiValidator.sendMessage(ErrorMessage.MUST_BE_COUPON_CODE, helper);
    }
    return value.toUpperCase();
  }

  static emailAddress(value: string, helper: CustomHelpers) {
    const match = value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (!match || match[0].length < 6) {
      return JoiValidator.sendMessage(ErrorMessage.NOT_VALID_EMAIL, helper);
    }
    return value.toLowerCase();
  }

  static emailAddresses(value: string, helper: CustomHelpers) {
    const match = value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}\,*\s*/g);
    if (!match || match[0].length < 6) {
      return JoiValidator.sendMessage(ErrorMessage.NOT_VALID_EMAIL, helper);
    }
    return value.toLowerCase();
  }

  static password(value: string, helper: CustomHelpers) {
    const match = value.match(/^[a-zA-Z0-9_@.]*/g);
    if (!match || match[0].length < 8) {
      return JoiValidator.sendMessage(ErrorMessage.PASSWORD_NOT_COMPATIBLE, helper);
    }
  }

  static otp(value: string, helper: CustomHelpers) {
    const match = value.match(/^[0-9]{4,}/g);
    if (!match || match[0].length < 4) {
      return JoiValidator.sendMessage(ErrorMessage.OTP_NOT_COMPATIBLE, helper);
    }
  }

  static UUID(value: string, helper: CustomHelpers) {
    const match = value
        .match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/g);
    if (!match || match[0].length < 32) {
      return JoiValidator.sendMessage(ErrorMessage.UUID_NOT_COMPATIBLE, helper);
    }
  }

  static ObjectId(value: string, helper: CustomHelpers) {
    if (!isValidObjectId(value)) {
      return JoiValidator.sendMessage(ErrorMessage.OBJECT_ID_NOT_COMPATIBLE, helper);
    }
  }
}
