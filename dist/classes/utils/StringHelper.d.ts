import { MessageParameter } from "../../classes/properties";
export declare class StringHelper {
    static capitalizeEach(input: string): string;
    static capitalizeFirst(input: string): string;
    static convertMessageHolders(name: string, message: string, params?: MessageParameter[]): string;
    static generate(length: number, charSet?: string): string;
    static replaceUnderscoresAndHyphens(input: string): string;
    static snakeToCamel(input: string): string;
    static snakeToKebab(input: string): string;
}
//# sourceMappingURL=StringHelper.d.ts.map