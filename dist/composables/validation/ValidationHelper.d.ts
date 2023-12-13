import { ValidationRule } from "../../classes/properties";
/**
 * Validation Helper for converting backend validations to frontend
 */
export declare class ValidationHelper {
    static exists(name: string): boolean;
    static getFunction(rule: ValidationRule): Function;
    static getName(rule: ValidationRule): string | undefined;
}
//# sourceMappingURL=ValidationHelper.d.ts.map