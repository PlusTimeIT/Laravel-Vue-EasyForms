/// <reference types="histoire/client" />
/// <reference types="@histoire/plugin-vue/components" />
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, any>;
  export default component;
}
