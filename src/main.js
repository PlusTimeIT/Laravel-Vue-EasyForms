import FormLoader from "./components/forms/FormLoader.vue";

export default {
  install(Vue, args = { axiosPrefix: "axios", axios: null }) {
    Vue.prototype.$axiosPrefix = args.axiosPrefix;
    Vue.prototype.$axios = args.axios;
    Vue.component("form-loader", FormLoader);
  }
};
