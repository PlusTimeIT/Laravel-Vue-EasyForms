import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
// import { container } from "@mdit/plugin-container";
import { vuetifyDesignSystem } from "histoire-vuetify-design-system/design";

export default defineConfig({
  outDir: "./dist/.histoire/dist",
  setupFile: "src/histoire/histoire.setup.ts",
  plugins: [
    HstVue(),
    vuetifyDesignSystem({
      configFile: __dirname + "/sandbox/src/vuetify/options",
    }),
  ],
  theme: {
    title: "Documentation Easy Forms",
    // colors: {
    //   primary: {
    //     50: "#1391dd",
    //   },
    // },
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
  // markdown: (md) => {
  //   md.use(container, {
  //     name: "alert",
  //     openRender: (tokens: any, index: any) => {
  //       return `<div class="${tokens[index].info || "alert"}">`;
  //     },
  //     closeRender: () => {
  //       return `</div>\n`;
  //     },
  //   });
  //   md.use(container, {
  //     name: "footer",
  //     openRender: () => {
  //       return `<div class="footer">\n`;
  //     },
  //     closeRender: () => {
  //       return `</div>\n`;
  //     },
  //   });
  //   md.use(container, {
  //     name: "nav",
  //     openRender: () => {
  //       return `<div class="nav">\n`;
  //     },
  //     closeRender: () => {
  //       return `</div>\n`;
  //     },
  //   });
  //   md.use(container, {
  //     name: "col",
  //     openRender: (tokens: any, index: any) => {
  //       return `<div class="${tokens[index].info || "col"}">`;
  //     },
  //     closeRender: () => {
  //       return `</div>\n`;
  //     },
  //   });
  //   return md;
  // },
});
