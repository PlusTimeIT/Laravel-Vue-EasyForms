import { MessageParameter } from "#/classes/properties";
export declare class StringHelper {
    static generate(length: number, charSet?: string): string;
    static convertMessageHolders(name: string, message: string, params?: MessageParameter[]): string;
    static replaceUnderscoresAndHyphens(input: string): string;
    static snakeToKebab(input: string): string;
    static snakeToCamel(input: string): string;
    static capitalizeFirst(input: string): string;
    static capitalizeEach(input: string): string;
}
//# sourceMappingURL=StringHelper.d.ts.map