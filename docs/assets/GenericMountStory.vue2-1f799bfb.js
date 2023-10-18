import { Q as defineAsyncComponent, R as createRouter, S as createWebHistory, U as createWebHashHistory, V as useDark, W as useToggle, k as watch, X as markRaw, E as reactive, d as defineComponent, r as ref, Y as watchEffect, o as openBlock, q as createBlock, Z as mergeProps, _ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-b18d341b.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const Comp1 = { "title": "Form Basics", "icon": "carbon:bookmark", "group": "forms", "docsOnly": true, "variants": [] };
const Comp2 = { "title": "Installation", "icon": "carbon:bookmark", "group": "getting-started", "docsOnly": true, "variants": [] };
const Comp3 = { "title": "Introduction", "icon": "carbon:bookmark", "group": "top", "docsOnly": true, "variants": [] };
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./FormLoader.story-c5cf560e.js"), true ? ["./FormLoader.story-c5cf560e.js","./vendor-b18d341b.js"] : void 0, import.meta.url));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./vendor-b18d341b.js").then((n) => n.aG), true ? [] : void 0, import.meta.url));
let files = [
  { "id": "src-components-formloader-story-vue", "path": ["Form Loader"], "filePath": "src/components/FormLoader.story.vue", "story": { "id": "src-components-formloader-story-vue", "title": "Form Loader", "group": "forms", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-formloader-story-vue-0", "title": "All Options" }, { "id": "src-components-formloader-story-vue-1", "title": "Input Form" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-formloader-story-vue-d06ce121.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-histoire-formbasics-story-js", "path": ["Form Basics"], "filePath": "src/histoire/FormBasics.story.js", "story": { "id": "src-histoire-formbasics-story-js", "title": "Form Basics", "group": "forms", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/histoire/FormBasics.story.md", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-histoire-formbasics-story-js-96308474.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-histoire-installation-story-js", "path": ["Installation"], "filePath": "src/histoire/Installation.story.js", "story": { "id": "src-histoire-installation-story-js", "title": "Installation", "group": "getting-started", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/histoire/Installation.story.md", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-histoire-installation-story-js-5b1c3bbb.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-histoire-introduction-story-js", "path": ["Introduction"], "filePath": "src/histoire/Introduction.story.js", "story": { "id": "src-histoire-introduction-story-js", "title": "Introduction", "group": "top", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/histoire/Introduction.story.md", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-histoire-introduction-story-js-de75b434.js"), true ? [] : void 0, import.meta.url) },
  { "id": "vuetify", "path": ["Vuetify"], "filePath": "/development/plustime/Laravel-Vue-EasyForms/node_modules/.histoire/plugins/vuetify-design-system/Vuetify.story.vue", "story": { "id": "vuetify", "title": "Vuetify", "group": "design-system", "layout": { "type": "single", "iframe": true }, "icon": "mdi:vuetify", "docsOnly": false, "variants": [{ "id": "vuetify-0", "title": "Material Colors", "icon": "mdi:palette" }, { "id": "vuetify-1", "title": "Text And Typography", "icon": "mdi:format-font" }, { "id": "vuetify-2", "title": "Border Radius", "icon": "mdi:border-all" }, { "id": "vuetify-3", "title": "Content", "icon": "mdi:view-grid-plus" }, { "id": "vuetify-4", "title": "Elevation", "icon": "mdi:box-shadow" }, { "id": "vuetify-5", "title": "Display", "icon": "mdi:monitor-screenshot" }, { "id": "vuetify-6", "title": "Float", "icon": "mdi:format-float-left" }, { "id": "vuetify-7", "title": "Overflow", "icon": "mdi:format-text-wrapping-overflow" }, { "id": "vuetify-8", "title": "Sizing", "icon": "mdi:image-size-select-small" }, { "id": "vuetify-9", "title": "Spacing", "icon": "mdi:space-invaders" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_vuetify-f13bd590.js"), true ? [] : void 0, import.meta.url) }
];
let tree = [{ "group": true, "id": "top", "title": "", "children": [{ "title": "Introduction", "index": 3 }] }, { "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Vuetify", "index": 4 }] }, { "group": true, "id": "getting-started", "title": "Getting Started", "children": [{ "title": "Installation", "index": 2 }] }, { "group": true, "id": "forms", "title": "Forms", "children": [{ "title": "Form Basics", "index": 1 }, { "title": "Form Loader", "index": 0 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/development/plustime/Laravel-Vue-EasyForms/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }, { "name": "vuetify-design-system" }], "outDir": "/development/plustime/Laravel-Vue-EasyForms/docs", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "top", "title": "" }, { "id": "design-system", "title": "Design System" }, { "id": "getting-started", "title": "Getting Started" }, { "id": "forms", "title": "Forms" }] }, "theme": { "title": "Vue EasyForms Documentation", "colors": { "primary": { "50": "#1391dd", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "setupFile": "./src/histoire/histoire.setup.ts" };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const base = "./";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-93766473.js"), true ? ["./HomeView.vue-93766473.js","./vendor-b18d341b.js"] : void 0, import.meta.url)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-d9f18107.js"), true ? ["./StoryView.vue-d9f18107.js","./vendor-b18d341b.js","./MobileOverlay.vue2-9b74d013.js","./BaseEmpty.vue-a823cad0.js","./state-76e420ad.js"] : void 0, import.meta.url)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-b18d341b.js").then((n) => n.aH), true ? [] : void 0, import.meta.url),
  "vue3": () => __vitePreload(() => import("./vendor-b18d341b.js").then((n) => n.aI), true ? [] : void 0, import.meta.url)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
