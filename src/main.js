import FormLoader from "./components/forms/FormLoader.vue";
import AsyncComputed from "vue-async-computed";
export default {
  install(Vue, args = { axiosPrefix: "axios", axios: null }) {
    Vue.use(AsyncComputed);
    Vue.prototype.$axiosPrefix = args.axiosPrefix;
    Vue.prototype.$axios = args.axios;
    Vue.component("form-loader", FormLoader);
  }
};
