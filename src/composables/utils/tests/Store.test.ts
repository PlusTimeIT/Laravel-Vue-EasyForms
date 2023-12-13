import { PluginOptions } from "../../../classes/PluginOptions";
import { store } from "../Store";

describe("Store Functions", () => {
  test("can options is correct instance", () => {
    expect(store.options).toBeInstanceOf(PluginOptions);
  });
  test("csrf class not instantiated", () => {
    expect(store.csrf).toBeUndefined();
  });
});
