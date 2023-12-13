import * as StringHelper from "../Strings";
import { MessageParameter } from "../../../classes/properties";

describe("String Functions", () => {
  test("can be converted from snake case to camel case", () => {
    expect(StringHelper.snakeToCamel("hello_world")).toBe("helloWorld");
  });

  test("can be converted from snake case to kebab case", () => {
    expect(StringHelper.snakeToKebab("hello_world")).toBe("hello-world");
  });
  test("can be converted from kebab case to snake case", () => {
    expect(StringHelper.kebabToSnake("hello-world")).toBe("hello_world");
  });

  test("can have the first letter capitalized", () => {
    expect(StringHelper.capitalizeFirst("hello")).toBe("Hello");
  });

  test("can have the first letter of each word capitalized", () => {
    expect(StringHelper.capitalizeEach("hello world")).toBe("Hello World");
  });

  test("can be randomly generated with a supplied length", () => {
    const generated = StringHelper.generate(10);
    expect(generated.length).toBe(10);
    expect(typeof generated).toBe("string");
  });

  test("can have their message holders replaced successfully", () => {
    const name = "John";
    const message = "Hello, {name}!";
    const params: MessageParameter[] = [{ key: "{name}", replace_with: "Doe" }];

    const result = StringHelper.convertMessageHolders(name, message, params);
    expect(result).toBe("Hello, Doe!");
  });
});
