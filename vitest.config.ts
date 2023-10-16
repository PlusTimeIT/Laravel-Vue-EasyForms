/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  resolve: {
    alias: [{ find: "#", replacement: path.resolve(__dirname, "./src") }],
  },
  // define: {
  //   global: "globalThis",
  // },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "Laravel Vue EasyForms",
    },
    rollupOptions: {
      external: ["vuetify", "vue", "axios", "vuetify/lib"],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "vuetify",
          axios: "axios",
        },
      },
    },
  },
  plugins: [vue(), vuetify({ autoImport: true })],
  test: {
    coverage: {
      provider: "istanbul",
    },
    setupFiles: "vuetify.config.js",
    globals: true,
    environment: "jsdom",
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
    browser: {
      enabled: true,
      name: "chrome", // browser name is required
    },
  },
});
