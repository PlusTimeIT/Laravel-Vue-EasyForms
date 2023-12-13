import type { MessageParameter } from "../../classes/properties";
declare const convertMessageHolders: (name: string, message: string, params?: MessageParameter[]) => string;
declare const snakeToCamel: (o: string) => string;
declare const snakeToKebab: (o: string) => string;
declare const kebabToSnake: (o: string) => string;
declare const capitalizeFirst: (o: string) => string;
declare const capitalizeEach: (o: string) => string;
declare const generate: (length: number, charSet?: string) => string;
export { snakeToCamel, snakeToKebab, kebabToSnake, capitalizeFirst, capitalizeEach, generate, convertMessageHolders };
//# sourceMappingURL=Strings.d.ts.map