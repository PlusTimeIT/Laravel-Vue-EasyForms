import FormLoader from "./components/forms/FormLoader.vue";

const LaravelEasyForms = {
  install(Vue) {
    Vue.component("form-loader", FormLoader);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(LaravelEasyForms);
}

export default LaravelEasyForms;
