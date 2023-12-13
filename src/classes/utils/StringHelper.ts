import { MessageParameter } from "../properties/MessageParameter";

/**
 * Utility class for various string manipulation tasks.
 */
export class StringHelper {
  /**
   * Capitalizes the first letter of each word in a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter of each word capitalized.
   */
  static capitalizeEach(input: string): string {
    return input
      .split(" ")
      .map((word) => StringHelper.capitalizeFirst(word))
      .join(" ");
  }

  /**
   * Capitalizes the first letter of a string.
   *
   * @param input The string to capitalize.
   * @returns The string with the first letter capitalized.
   */
  static capitalizeFirst(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  /**
   * Convert validation message placeholders in a string.
   *
   * @param name The attribute name associated with the validation message.
   * @param message The validation message containing placeholders.
   * @param params An array of objects containing key-value pairs to replace placeholders.
   * @returns A string with placeholders replaced and kebab case conversion applied.
   */
  static convertMessageHolders(name: string, message: string, params: MessageParameter[] = []): string {
    for (const param of params) {
      message = message.replace(param.key, param.replace_with);
    }
    return message.replace(":attribute", StringHelper.replaceUnderscoresAndHyphens(name));
  }

  /**
   * Generates a random string of the specified length using characters from the given character set.
   *
   * @param length The length of the random string to generate.
   * @param charSet The character set to use for generating the random string.
   *                Defaults to 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.
   * @returns A randomly generated string of the specified length.
   */
  static generate(length: number, charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string {
    const randomChars: string[] = [];

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      randomChars.push(charSet[randomIndex]);
    }

    return randomChars.join("");
  }

  /**
   * Replaces underscores and hyphens with spaces in a string.
   *
   * @param input The input string containing underscores or hyphens.
   * @returns A new string with underscores and hyphens replaced by spaces.
   */
  static replaceUnderscoresAndHyphens(input: string): string {
    return input.replace(/[_-]/g, " ");
  }

  /**
   * Converts Snake case to Camel case.
   *
   * @param input The string to convert.
   * @returns Camel case conversion of the string.
   */
  static snakeToCamel(input: string): string {
    return input.toLowerCase().replace(/[-_][a-z0-9]/g, (group) => group.slice(-1).toUpperCase());
  }

  /**
   * Convert Snake case to Kebab case.
   *
   * @param input The string to convert.
   * @returns Kebab case conversion of the string.
   */
  static snakeToKebab(input: string): string {
    return input.replaceAll("_", "-");
  }
  /**
   * Convert Kebab to Snake case
   *
   * @param input The string to convert.
   * @returns Snake case conversion of the string.
   */
  static kebabToSnake(input: string): string {
    return input.replaceAll("-", "_");
  }
}
