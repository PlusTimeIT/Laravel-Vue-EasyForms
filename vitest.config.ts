/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    define: {
      global: "globalThis",
    },
    test: {
      // coverage: {
      //   provider: "istanbul",
      // },
      globals: true,
      setupFiles: ["vuetify.config.ts"],
      environment: "jsdom",
      server: {
        deps: {
          inline: ["vuetify"],
        },
      },
      // browser: {
      //   enabled: true,
      //   name: "firefox", // browser name is required
      // },
    },
  }),
);
