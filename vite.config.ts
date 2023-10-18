/// <reference types="histoire" />
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "",
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: [{ find: "#", replacement: resolve(__dirname, "src") }],
  },
  // removed to make Histoire work - but currently required for Vitest.
  // define: {
  //   global: "globalThis",
  // },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "axios", "vuetify/lib"],
      output: {
        entryFileNames: "[name].js",
        globals: {
          vue: "Vue",
          axios: "axios",
        },
      },
    },
  },
});
