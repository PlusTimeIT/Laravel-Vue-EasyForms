import { defineSetupVue3 } from "@histoire/plugin-vue";
import * as labs from "vuetify/labs/components";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import FormLoaderPlugin from "#/index";
import HistoireVuetifyDS from "histoire-vuetify-design-system";
import { createVuetify } from "vuetify";
import HistoireWrapper from "./HistoireWrapper.vue";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
  app
    .use(
      createVuetify({
        components: {
          ...components,
          ...labs,
        },
        directives,
      }),
    )
    .use(FormLoaderPlugin, {
      backend_domain: "",
      axios_prefix: "",
      csrf_endpoint: "",
      uses_vue_router: false,
      required_tags_only: false,
      tags_on_placeholder: true,
      tags_on_labels: false,
    })
    .use(HistoireVuetifyDS);

  addWrapper(HistoireWrapper);
});
