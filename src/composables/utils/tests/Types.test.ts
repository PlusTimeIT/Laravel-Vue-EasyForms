import * as TypeHelper from "../Types";

describe("Type Functions", () => {
  test("can detect arrays and non arrays", () => {
    expect(TypeHelper.isArray([])).toBe(true);
    expect(TypeHelper.isArray({})).toBe(false);
  });

  test("can detect objects and non objects", () => {
    expect(TypeHelper.isObject({})).toBe(true);
    expect(TypeHelper.isObject(8)).toBe(false);
  });

  test("can detect files and non files", () => {
    expect(TypeHelper.isFile(new File([""], "example.txt"))).toBe(true);
    expect(TypeHelper.isFile({})).toBe(false);
  });

  test("can check strings and non strings", () => {
    expect(TypeHelper.isString("")).toBe(true);
    expect(TypeHelper.isString(123)).toBe(false);
  });

  test("can check booleans and non booleans", () => {
    expect(TypeHelper.isBoolean(true)).toBe(true);
    expect(TypeHelper.isBoolean("true")).toBe(false);
  });

  test("can check functions and non functions", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(TypeHelper.isFunction(() => {})).toBe(true);
    expect(TypeHelper.isFunction({})).toBe(false);
  });

  test("can check numbers and non numbers", () => {
    expect(TypeHelper.isNumber(42)).toBe(true);
    expect(TypeHelper.isNumber("42")).toBe(false);
  });

  test("can check if numeric or non numeric", () => {
    expect(TypeHelper.isNumeric("42")).toBe(true);
    expect(TypeHelper.isNumeric("abc")).toBe(false);
  });

  test("can check if null or not null", () => {
    expect(TypeHelper.isNull(null)).toBe(true);
    expect(TypeHelper.isNull(undefined)).toBe(false);
  });

  test("can check if undefined or defined", () => {
    expect(TypeHelper.isUndefined(undefined)).toBe(true);
    expect(TypeHelper.isUndefined(null)).toBe(false);
  });

  test("can check for emptiness regardless of type", () => {
    expect(TypeHelper.isEmpty("")).toBe(true);
    expect(TypeHelper.isEmpty(undefined)).toBe(true);
    expect(TypeHelper.isEmpty(null)).toBe(true);
    expect(TypeHelper.isEmpty([1, 2, 3])).toBe(false);
    expect(TypeHelper.isEmpty(false)).toBe(false);
    expect(TypeHelper.isEmpty("10")).toBe(false);
  });
});
