import { StringHelper } from "#/classes/utils";
import { MessageParameter } from "#/classes/properties";

const convertMessageHolders = (name: string, message: string, params?: MessageParameter[]): string =>
  StringHelper.convertMessageHolders(name, message, params);
const snakeToCamel = (o: string): string => StringHelper.snakeToCamel(o);
const capitalizeFirst = (o: string): string => StringHelper.capitalizeFirst(o);
const capitalizeEach = (o: string): string => StringHelper.capitalizeEach(o);
const generate = (length: number, charSet?: string): string => StringHelper.generate(length, charSet);

export { snakeToCamel, capitalizeFirst, capitalizeEach, generate, convertMessageHolders };
