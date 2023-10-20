import { StringHelper } from "../../classes/utils/StringHelper";
/**
 * Prop Helper for checking and formatting properties
 */
export class PropHelper {
  /**
   * Format the components prop names.
   * @param key
   * @returns string appropriate key for prop names
   */
  static formatKey(key: string): string {
    return StringHelper.snakeToKebab(key);
  }
}
