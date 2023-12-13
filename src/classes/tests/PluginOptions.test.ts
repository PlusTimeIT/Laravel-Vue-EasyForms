import { test, expect } from "vitest";
import { PluginOptions } from "../PluginOptions";

describe("PluginOptions class", () => {
  const options = new PluginOptions({
    backend_domain: "https://example.com",
    axios_prefix: "/api/v1",
    csrf_endpoint: "/security/cookie",
  });

  test("test default plugin axios has withCredentials set to true", () => {
    expect(options.axios.defaults.withCredentials).toBe(true);
  });

  test("test default plugin option instance properties", () => {
    expect(options.backend_domain).toBe("https://example.com");
    expect(options.axios_prefix).toBe("/api/v1");
    expect(options.csrf_endpoint).toBe("/security/cookie");
  });

  test("test can build domain", () => {
    const apiUrl = options.buildDomain("/users");
    expect(apiUrl).toBe("https://example.com/api/v1/users");
  });

  test("test plugin options can be a singleton", () => {
    const newInstance = new PluginOptions();
    const singletonInstance = PluginOptions.getInstance();
    expect(newInstance).toBe(singletonInstance);
  });

  test("test modifying properties", () => {
    options.backend_domain = "https://new-domain.com";
    expect(options.buildDomain("/posts")).toBe("https://new-domain.com/api/v1/posts");
  });
});
