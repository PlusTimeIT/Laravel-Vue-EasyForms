import { StringHelper } from "../../classes/utils";
import type { MessageParameter } from "../../classes/properties";

const convertMessageHolders = (name: string, message: string, params?: MessageParameter[]): string =>
  StringHelper.convertMessageHolders(name, message, params);
const snakeToCamel = (o: string): string => StringHelper.snakeToCamel(o);
const snakeToKebab = (o: string): string => StringHelper.snakeToKebab(o);
const kebabToSnake = (o: string): string => StringHelper.kebabToSnake(o);
const kebabToPascal = (o: string): string => StringHelper.kebabToPascal(o);
const capitalizeFirst = (o: string): string => StringHelper.capitalizeFirst(o);
const capitalizeEach = (o: string): string => StringHelper.capitalizeEach(o);
const generate = (length: number, charSet?: string): string => StringHelper.generate(length, charSet);

export {
  snakeToCamel,
  snakeToKebab,
  kebabToSnake,
  kebabToPascal,
  capitalizeFirst,
  capitalizeEach,
  generate,
  convertMessageHolders,
};
