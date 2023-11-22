import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { resolve } from "path";
import { container } from "@mdit/plugin-container";
import { vuetifyDesignSystem } from "histoire-vuetify-design-system/design";

export default defineConfig({
  outDir: resolve(__dirname, "docs"),
  setupFile: "./src/histoire/histoire.setup.ts",
  plugins: [
    HstVue(),
    vuetifyDesignSystem({
      configFile: __dirname + "./sandbox/src/plugins/vuetify/options.ts",
    }),
  ],
  routerMode: "hash",
  theme: {
    title: "Vue EasyForms Documentation",
    logo: {
      square: "./src/histoire/logos/square-logo-transparent-bg.png",
      light: "./src/histoire/logos/lvef-logo-large-transparent-bg.png",
      dark: "./src/histoire/logos/lvef-logo-large-transparent-bg.png",
    },
    colors: {
      primary: {
        50: "#1391dd",
      },
    },
  },
  tree: {
    groups: [
      {
        id: "top",
        title: "",
      },
      {
        id: "getting-started",
        title: "Getting Started",
      },
      {
        id: "forms",
        title: "Forms",
      },
    ],
  },
  vite: {
    base: "./",
    optimizeDeps: {
      include: ["vue", "vuetify"],
    },
    build: {
      target: "esnext",
    },
    // publicDir: "/Laravel-Vue-EasyForms/",
  },
  markdown: (md) => {
    md.use(container, {
      name: "alert",
      openRender: (tokens: any, index: any) => {
        return `<div class="${tokens[index].info || "alert"}"><div class="contents">`;
      },
      closeRender: () => {
        return `</div></div>\n`;
      },
    });
    md.use(container, {
      name: "div",
      openRender: (tokens: any, index: any) => {
        return `<div class="${tokens[index].info || ""}">`;
      },
      closeRender: () => {
        return `</div>\n`;
      },
    });
    return md;
  },
});
