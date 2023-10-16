import { defineSetupVue3 } from "@histoire/plugin-vue";
import * as labs from "vuetify/labs/components";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import FormLoaderPlugin from "#/index";
import HistoireVuetifyDS from "histoire-vuetify-design-system";
import { createVuetify } from "vuetify";

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(
    createVuetify({
      components: {
        ...components,
        ...labs,
      },
      directives,
    }),
  );

  app.use(FormLoaderPlugin, {
    backend_domain: "",
    axios_prefix: "",
    csrf_endpoint: "",
    uses_vue_router: false,
    required_tags_only: false,
    tags_on_placeholder: true,
    tags_on_labels: false,
  });
  // addWrapper(WrapperGlobal);
  app.use(HistoireVuetifyDS);
});
