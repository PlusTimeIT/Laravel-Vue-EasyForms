/// <reference types="histoire" />
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [vue(), vuetify({ autoImport: true })],
  // removed to make Histoire work - but currently required for Vitest.
  // define: {
  //   global: "globalThis",
  // },
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/index.ts"),
        resolve(__dirname, "src/actions.ts"),
        resolve(__dirname, "src/elements.ts"),
        resolve(__dirname, "src/enums.ts"),
        resolve(__dirname, "src/fields.ts"),
        resolve(__dirname, "src/forms.ts"),
        resolve(__dirname, "src/properties.ts"),
        resolve(__dirname, "src/server.ts"),
        resolve(__dirname, "src/types.ts"),
      ],
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
