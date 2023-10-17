import { createVuetify } from "vuetify";
import * as labs from "vuetify/labs/components";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Vuetify3Options from "./options";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
  ...Vuetify3Options,
});
