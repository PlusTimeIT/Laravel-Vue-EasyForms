import { Q as defineAsyncComponent, R as createRouter, S as createWebHistory, U as createWebHashHistory, V as useDark, W as useToggle, k as watch, X as markRaw, E as reactive, d as defineComponent, r as ref, Y as watchEffect, o as openBlock, q as createBlock, Z as mergeProps, _ as resolveDynamicComponent, h as createCommentVNode } from './vendor-C_VPWDrv.js';

const scriptRel = 'modulepreload';const assetsURL = function(dep, importerUrl) { return new URL(dep, importerUrl).href };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
    let promise = Promise.resolve();
    // @ts-expect-error true will be replaced with boolean later
    if (true && deps && deps.length > 0) {
        const links = document.getElementsByTagName('link');
        promise = Promise.all(deps.map((dep) => {
            // @ts-expect-error assetsURL is declared before preload.toString()
            dep = assetsURL(dep, importerUrl);
            if (dep in seen)
                return;
            seen[dep] = true;
            const isCss = dep.endsWith('.css');
            const cssSelector = isCss ? '[rel="stylesheet"]' : '';
            const isBaseRelative = !!importerUrl;
            // check if the file is already preloaded by SSR markup
            if (isBaseRelative) {
                // When isBaseRelative is true then we have `importerUrl` and `dep` is
                // already converted to an absolute URL by the `assetsURL` function
                for (let i = links.length - 1; i >= 0; i--) {
                    const link = links[i];
                    // The `links[i].href` is an absolute URL thanks to browser doing the work
                    // for us. See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes:idl-domstring-5
                    if (link.href === dep && (!isCss || link.rel === 'stylesheet')) {
                        return;
                    }
                }
            }
            else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                return;
            }
            const link = document.createElement('link');
            link.rel = isCss ? 'stylesheet' : scriptRel;
            if (!isCss) {
                link.as = 'script';
                link.crossOrigin = '';
            }
            link.href = dep;
            document.head.appendChild(link);
            if (isCss) {
                return new Promise((res, rej) => {
                    link.addEventListener('load', res);
                    link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
                });
            }
        }));
    }
    return promise
        .then(() => baseModule())
        .catch((err) => {
        const e = new Event('vite:preloadError', { cancelable: true });
        // @ts-expect-error custom payload
        e.payload = err;
        window.dispatchEvent(e);
        if (!e.defaultPrevented) {
            throw err;
        }
    });
};

const Comp1 = {"title":"Form Basics","icon":"carbon:bookmark","group":"forms","docsOnly":true,"variants":[]};

const Comp2 = {"title":"Installation","icon":"carbon:bookmark","group":"getting-started","docsOnly":true,"variants":[]};

const Comp3 = {"title":"Intro","icon":"carbon:bookmark","group":"top","docsOnly":true,"variants":[]};

const Comp0 = defineAsyncComponent(() => __vitePreload(() => import('./FormLoader.story-A_nj4Mkv.js'),true?__vite__mapDeps([0,1]):void 0,import.meta.url));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import('./vendor-C_VPWDrv.js').then(n => n.a_),true?__vite__mapDeps([]):void 0,import.meta.url));
let files = [
  { "id": "src-components-formloader-story-vue", "path": ["Form Loader"], "filePath": "src/components/FormLoader.story.vue", "story": { "id": "src-components-formloader-story-vue", "title": "Form Loader", "group": "forms", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-formloader-story-vue-0", "title": "Input Form - Basic" }, { "id": "src-components-formloader-story-vue-1", "title": "Input Form - Advanced" }, { "id": "src-components-formloader-story-vue-2", "title": "Action Form - Buttons Vertical" }, { "id": "src-components-formloader-story-vue-3", "title": "Action Form - Buttons Horizontal" }, { "id": "src-components-formloader-story-vue-4", "title": "Action Form - Icons Vertical" }, { "id": "src-components-formloader-story-vue-5", "title": "Action Form - Icons Horizontal" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import('./__resolved__virtual_story-source_src-components-formloader-story-vue-CpZKwXEk.js'),true?__vite__mapDeps([]):void 0,import.meta.url) },
  { "id": "src-docs-formbasics-story-js", "path": ["Form Basics"], "filePath": "src/docs/FormBasics.story.js", "story": { "id": "src-docs-formbasics-story-js", "title": "Form Basics", "group": "forms", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/FormBasics.story.md", "index": 1, component: Comp1, source: () => __vitePreload(() => import('./__resolved__virtual_story-source_src-docs-formbasics-story-js-C2SYqzL4.js'),true?__vite__mapDeps([]):void 0,import.meta.url) },
  { "id": "src-docs-installation-story-js", "path": ["Installation"], "filePath": "src/docs/Installation.story.js", "story": { "id": "src-docs-installation-story-js", "title": "Installation", "group": "getting-started", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/Installation.story.md", "index": 2, component: Comp2, source: () => __vitePreload(() => import('./__resolved__virtual_story-source_src-docs-installation-story-js-DrW_VENE.js'),true?__vite__mapDeps([]):void 0,import.meta.url) },
  { "id": "src-docs-introduction-story-js", "path": ["Intro"], "filePath": "src/docs/Introduction.story.js", "story": { "id": "src-docs-introduction-story-js", "title": "Intro", "group": "top", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/Introduction.story.md", "index": 3, component: Comp3, source: () => __vitePreload(() => import('./__resolved__virtual_story-source_src-docs-introduction-story-js-CTdnISD6.js'),true?__vite__mapDeps([]):void 0,import.meta.url) },
  { "id": "vuetify", "path": ["Vuetify"], "filePath": "/development/plustime/Laravel-Vue-EasyForms/node_modules/.histoire/plugins/vuetify-design-system/Vuetify.story.vue", "story": { "id": "vuetify", "title": "Vuetify", "group": "design-system", "layout": { "type": "single", "iframe": true }, "icon": "mdi:vuetify", "docsOnly": false, "variants": [{ "id": "vuetify-0", "title": "Material Colors", "icon": "mdi:palette" }, { "id": "vuetify-1", "title": "Text And Typography", "icon": "mdi:format-font" }, { "id": "vuetify-2", "title": "Border Radius", "icon": "mdi:border-all" }, { "id": "vuetify-3", "title": "Content", "icon": "mdi:view-grid-plus" }, { "id": "vuetify-4", "title": "Elevation", "icon": "mdi:box-shadow" }, { "id": "vuetify-5", "title": "Display", "icon": "mdi:monitor-screenshot" }, { "id": "vuetify-6", "title": "Float", "icon": "mdi:format-float-left" }, { "id": "vuetify-7", "title": "Overflow", "icon": "mdi:format-text-wrapping-overflow" }, { "id": "vuetify-8", "title": "Sizing", "icon": "mdi:image-size-select-small" }, { "id": "vuetify-9", "title": "Spacing", "icon": "mdi:space-invaders" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import('./__resolved__virtual_story-source_vuetify-DmpNp6MK.js'),true?__vite__mapDeps([]):void 0,import.meta.url) }
];
let tree = [{ "group": true, "id": "top", "title": "", "children": [{ "title": "Intro", "index": 3 }] }, { "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Vuetify", "index": 4 }] }, { "group": true, "id": "getting-started", "title": "Getting Started", "children": [{ "title": "Installation", "index": 2 }] }, { "group": true, "id": "forms", "title": "Forms", "children": [{ "title": "Form Basics", "index": 1 }, { "title": "Form Loader", "index": 0 }] }];

const Logo_square = ""+new URL('square-logo-transparent-bg-Bbu36_xq.png', import.meta.url).href+"";

const Logo_dark = ""+new URL('lvef-logo-large-transparent-bg-Dj9ao_Fo.png', import.meta.url).href+"";

const config = {"plugins":[{"name":"builtin:tailwind-tokens"},{"name":"builtin:vanilla-support","supportPlugin":{"id":"vanilla","moduleName":"/development/plustime/Laravel-Vue-EasyForms/node_modules/histoire/dist/node/builtin-plugins/vanilla-support","setupFn":"setupVanilla"}},{"name":"@histoire/plugin-vue","supportPlugin":{"id":"vue3","moduleName":"@histoire/plugin-vue","setupFn":"setupVue3","importStoriesPrepend":"import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'"},"commands":[{"id":"histoire:plugin-vue:generate-story","label":"Generate Vue 3 story from component","icon":"https://vuejs.org/logo.svg","searchText":"generate create","clientSetupFile":"@histoire/plugin-vue/dist/commands/generate-story.client.js"}]},{"name":"vuetify-design-system"}],"outDir":"/development/plustime/Laravel-Vue-EasyForms/docs","storyMatch":["**/*.story.vue","**/*.story.svelte"],"storyIgnored":["**/node_modules/**","**/dist/**"],"supportMatch":[{"id":"vanilla","patterns":["**/*.js"],"pluginIds":["vanilla"]},{"id":"vue","patterns":["**/*.vue"],"pluginIds":["vue3"]}],"tree":{"file":"title","order":"asc","groups":[{"id":"top","title":""},{"id":"design-system","title":"Design System"},{"id":"getting-started","title":"Getting Started"},{"id":"forms","title":"Forms"}]},"theme":{"title":"Vue EasyForms Documentation","colors":{"primary":{"50":"#1391dd","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"},"gray":{"50":"#fafafa","100":"#f4f4f5","200":"#e4e4e7","300":"#d4d4d8","400":"#a1a1aa","500":"#71717a","600":"#52525b","700":"#3f3f46","750":"#323238","800":"#27272a","850":"#1f1f21","900":"#18181b","950":"#101012"}},"defaultColorScheme":"auto","storeColorScheme":true,"darkClass":"dark","logo":{"square":"/development/plustime/Laravel-Vue-EasyForms/src/docs/logos/square-logo-transparent-bg.png","light":"/development/plustime/Laravel-Vue-EasyForms/src/docs/logos/lvef-logo-large-transparent-bg.png","dark":"/development/plustime/Laravel-Vue-EasyForms/src/docs/logos/lvef-logo-large-transparent-bg.png"}},"responsivePresets":[{"label":"Mobile (Small)","width":320,"height":560},{"label":"Mobile (Medium)","width":360,"height":640},{"label":"Mobile (Large)","width":414,"height":896},{"label":"Tablet","width":768,"height":1024},{"label":"Laptop (Small)","width":1024,"height":null},{"label":"Laptop (Large)","width":1366,"height":null},{"label":"Desktop","width":1920,"height":null},{"label":"4K","width":3840,"height":null}],"backgroundPresets":[{"label":"Transparent","color":"transparent","contrastColor":"#333"},{"label":"White","color":"#fff","contrastColor":"#333"},{"label":"Light gray","color":"#aaa","contrastColor":"#000"},{"label":"Dark gray","color":"#333","contrastColor":"#fff"},{"label":"Black","color":"#000","contrastColor":"#eee"}],"sandboxDarkClass":"dark","routerMode":"hash","build":{"excludeFromVendorsChunk":[]},"viteIgnorePlugins":[],"setupFile":"./src/docs/histoire.setup.ts"};
const logos = {square: Logo_square, light: Logo_dark, dark: Logo_dark};

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
      component: () => __vitePreload(() => import('./HomeView.vue-CSbAyuCu.js'),true?__vite__mapDeps([2,3,1]):void 0,import.meta.url)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import('./StoryView.vue-DymnRrQb.js'),true?__vite__mapDeps([4,1,3,5,6,7]):void 0,import.meta.url)
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
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref) => {
    ref.value = isDark.value;
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
    'vanilla': () => __vitePreload(() => import('./vendor-C_VPWDrv.js').then(n => n.a$),true?__vite__mapDeps([]):void 0,import.meta.url),
  'vue3': () => __vitePreload(() => import('./vendor-C_VPWDrv.js').then(n => n.b0),true?__vite__mapDeps([]):void 0,import.meta.url)
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

export { __vitePreload as _, tree as a, _sfc_main as b, customLogos as c, clientSupportPlugins as d, base as e, files as f, histoireConfig as h, isDark as i, mapFile as m, router as r, toggleDark as t };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./FormLoader.story-A_nj4Mkv.js","./vendor-C_VPWDrv.js","./HomeView.vue-CSbAyuCu.js","./story-DmwHRgC_.js","./StoryView.vue-DymnRrQb.js","./MobileOverlay.vue2-Bh8ydtPU.js","./BaseEmpty.vue-DbQh0CiW.js","./state-DUBw4Oyv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
