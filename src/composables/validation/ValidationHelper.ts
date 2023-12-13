import { ValidationRule } from "../../classes/properties";
import { ValidationHandler } from "./ValidationHandler";
import { ValidationUpdates } from "../../enums";
import { capitalizeFirst } from "../utils";
/**
 * Validation Helper for converting backend validations to frontend
 */
export class ValidationHelper {
  static exists(name: string): boolean {
    return typeof ValidationHandler[name as keyof ValidationHandler] !== "undefined"
      ? true
      : capitalizeFirst(name) in ValidationUpdates;
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getFunction(rule: ValidationRule): Function {
    // check if function has been renamed.
    return ValidationHandler[this.getName(rule) as keyof ValidationHandler];
  }
  static getName(rule: ValidationRule): string | undefined {
    if (!this.exists(rule.name)) {
      return undefined;
    }
    if (capitalizeFirst(rule.name) in ValidationUpdates) {
      return ValidationUpdates[capitalizeFirst(rule.name) as keyof typeof ValidationUpdates];
    }
    return rule.name;
  }
}
