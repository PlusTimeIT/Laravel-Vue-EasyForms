import { createApp } from "vue";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import FormLoaderPlugin from "../../dist";

createApp(App)
  .use(FormLoaderPlugin, {
    backend_domain: "",
    axios_prefix: "",
    csrf_endpoint: null,
    uses_vue_router: false,
    required_tags_only: false,
    tags_on_placeholder: true,
    tags_on_labels: false,
  })
  .use(vuetify)
  .mount("#app");
