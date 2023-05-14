import { CustomHelpers } from 'joi';
export declare class JoiValidator {
    static getFieldName(helper: CustomHelpers): string;
    static sendMessage(msg: string, helper: CustomHelpers): import("joi").ErrorReport;
    static validateNumber(length: number, value: string, helper: CustomHelpers): string | import("joi").ErrorReport;
    static postalCode(value: string, helper: CustomHelpers): string | import("joi").ErrorReport;
    static pin(value: string, helper: CustomHelpers): string | import("joi").ErrorReport;
    static phoneNumber(value: string, helper: CustomHelpers): string | import("joi").ErrorReport;
    static gender(value: string, helper: CustomHelpers): string | import("joi").ErrorReport;
    static percentage(value: number, helper: CustomHelpers): number | import("joi").ErrorReport;
    static couponCode(value: string, helper: CustomHelpers): string | import("joi").ErrorReport;
    static emailAddress(value: string, helper: CustomHelpers): string | import("joi").ErrorReport;
    static password(value: string, helper: CustomHelpers): import("joi").ErrorReport;
    static otp(value: string, helper: CustomHelpers): import("joi").ErrorReport;
    static UUID(value: string, helper: CustomHelpers): import("joi").ErrorReport;
    static ObjectId(value: string, helper: CustomHelpers): import("joi").ErrorReport;
}
//# sourceMappingURL=JoiValidator.d.ts.map