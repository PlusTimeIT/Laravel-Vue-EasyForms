// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { shallowMount } from "@vue/test-utils";
import { expect, benchmark, bench } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import FormLoader from "../../../components/FormLoader.vue";
import { Button, Icon, Tooltip } from "../../../classes/elements";
import { ActionForm, InputForm } from "../../../classes/forms";
import { TextField } from "../../../classes/fields";
import { ButtonTypes } from "../../../enums";
import { ActionIcon, ActionButton } from "../../../classes/actions";
import { LocationTypes } from "../../../enums";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
});

global.ResizeObserver = import("resize-observer-polyfill");

benchmark("input form manual loading", () => {
  const inputForm = new InputForm({
    name: "TestForm",
    type: "input",
    fields: [
      new TextField({
        name: "test_basic_text_and_label",
        placeholder: "Testing Basic Text and Label",
        label: "Testing Basic Text and Label",
        required: true,
        cols: 3,
      }),
    ],
    buttons: [
      new Button({
        type: ButtonTypes.Process,
        text: "Testing Button",
        prepend_icon: new Icon({
          color: "secondary",
          icon: "mdi-home",
        }),
      }),
    ],
  });
  const wrapper = shallowMount(FormLoader, {
    global: {
      plugins: [vuetify],
    },
    props: {
      form: inputForm,
    },
  });
  expect(wrapper.vm.form).toMatchObject(inputForm);
});

bench("action form manual loading", () => {
  const actionForm = new ActionForm({
    name: "TestForm",
    type: "action",
    inline: true,
    actions: [
      new ActionButton({
        name: "test",
        button: new Button({
          type: ButtonTypes.Cancel,
          color: "secondary",
          text: "Cancel",
        }),
      }),
      new ActionIcon({
        name: "test",
        icon: new Icon({
          color: "secondary",
          icon: "mdi-alien-outline",
        }),
      }),
      new ActionIcon({
        name: "test",
        icon: new Icon({
          color: "accent",
          icon: "mdi-alpha-c-box-outline",
          tooltip: new Tooltip({
            text: "hello C box",
            location: LocationTypes.Bottom,
          }),
        }),
      }),
    ],
  });
  const wrapper = shallowMount(FormLoader, {
    global: {
      plugins: [vuetify],
    },
    props: {
      form: actionForm,
    },
  });
  expect(wrapper.vm.form).toMatchObject(actionForm);
});
