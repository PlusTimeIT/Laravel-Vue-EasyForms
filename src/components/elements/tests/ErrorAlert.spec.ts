// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import ErrorAlert from "../../../components/elements/ErrorAlert.vue";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
});

global.ResizeObserver = import("resize-observer-polyfill");

describe("default easy button", () => {
  const wrapper = mount(ErrorAlert, {
    global: {
      plugins: [vuetify],
    },
    props: {
      text: "Error Loading Form - Unknown Component",
    },
  });

  test("test default error alert shows", () => {
    expect(wrapper.findComponent({ name: "VAlert" }).text()).toContain("Error Loading Form - Unknown Component");
  });
});
