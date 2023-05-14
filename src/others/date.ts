/* eslint-disable no-unused-vars */
export enum DateResponseType {
    SEC,
    MIN,
    HR,
    DAY,
    MONTH,
}

export default class {
  static convertUTC(utc: number, returnType: DateResponseType): number {
    let divider = 0;
    switch (returnType) {
      case DateResponseType.SEC:
        divider = 1000;
        break;
      case DateResponseType.MIN:
        divider = 60000;
        break;
      case DateResponseType.HR:
        divider = 3.6e+6;
        break;
      case DateResponseType.DAY:
        divider = 8.64e+7;
        break;
      case DateResponseType.MONTH:
        divider = 2.628e+9;
        break;
      default:
        break;
    }
    return Math.floor(utc/divider);
  }

  static subtract(base: Date, operand: Date, returnType: DateResponseType) {
    const utc1 = Date.UTC(base.getFullYear(), base.getMonth(), base.getDate());
    const utc2 = Date.UTC(operand.getFullYear(), operand.getMonth(), operand.getDate());
    const differenceInUTC = utc1-utc2;
    return this.convertUTC(differenceInUTC, returnType);
  }
}
