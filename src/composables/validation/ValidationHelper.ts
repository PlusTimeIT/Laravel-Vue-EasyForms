import { ValidationRule } from "../../classes/properties";
import { ValidationHandler } from "./ValidationHandler";
import { ValidationUpdates } from "../../enums";
/**
 * Validation Helper for converting backend validations to frontend
 */
export class ValidationHelper {
  static exists(rule: ValidationRule): boolean {
    // check if function has been renamed.
    if (typeof ValidationHandler[rule.name as keyof ValidationHandler] === "undefined") {
      if (!(rule.name in ValidationUpdates)) {
        return false;
      }
    }
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  static getFunction(rule: ValidationRule): Function {
    // check if function has been renamed.
    if (typeof ValidationHandler[rule.name as keyof ValidationHandler] === "undefined") {
      //validation not currently processed on the frontend.
      if (!(rule.name in ValidationUpdates)) {
        return ValidationHandler[
          ValidationUpdates[rule.name as keyof typeof ValidationUpdates] as keyof ValidationHandler
        ];
      }
    }
    return ValidationHandler[rule.name as keyof ValidationHandler];
  }

  static getName(rule: ValidationRule): string {
    // check if function has been renamed.
    if (typeof ValidationHandler[rule.name as keyof ValidationHandler] === "undefined") {
      //validation not currently processed on the frontend.
      if (!(rule.name in ValidationUpdates)) {
        return ValidationUpdates[rule.name as keyof typeof ValidationUpdates];
      }
    }
    return rule.name;
  }
}
