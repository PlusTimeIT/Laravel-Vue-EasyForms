import { vMaska } from "maska";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as labs from "vuetify/labs/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
});

const testWrapper = {
  global: {
    directives: {
      maska: vMaska,
    },
    plugins: [vuetify],
  },
};

export { testWrapper };
