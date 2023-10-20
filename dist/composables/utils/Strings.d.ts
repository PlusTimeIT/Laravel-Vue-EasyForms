import { MessageParameter } from "#/classes/properties";
declare const convertMessageHolders: (name: string, message: string, params?: MessageParameter[]) => string;
declare const snakeToCamel: (o: string) => string;
declare const capitalizeFirst: (o: string) => string;
declare const capitalizeEach: (o: string) => string;
declare const generate: (length: number, charSet?: string) => string;
export { snakeToCamel, capitalizeFirst, capitalizeEach, generate, convertMessageHolders };
//# sourceMappingURL=Strings.d.ts.map