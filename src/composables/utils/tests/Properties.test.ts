import * as PropertyHelper from "../Properties";

describe("Property Functions", () => {
  test("can format key", () => {
    expect(PropertyHelper.formatKey("hello_world")).toBe("hello-world");
    expect(PropertyHelper.formatKey("hello_world_and_universe")).toBe("hello-world-and-universe");
  });
});
