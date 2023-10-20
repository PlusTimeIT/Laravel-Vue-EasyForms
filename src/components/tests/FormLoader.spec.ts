// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import FormLoader from "../../components/FormLoader.vue";
import { Button, Icon, Tooltip } from "../../classes/elements";
import { TextField } from "../../classes/fields";
import { ActionForm, InputForm } from "../../classes/forms";
import { ActionIcon, ActionButton } from "../../classes/actions";
import { LocationTypes } from "../../enums";
import { ButtonTypes } from "../../enums";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
});

describe("form loader", () => {
  test("test if form throws error on unknown form - nothing provided", () => {
    const wrapper = mount(FormLoader, {
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.vm.form_component).toEqual("error-form");
  });

  test("test input form loads without errors", () => {
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
    const wrapper = mount(FormLoader, {
      global: {
        plugins: [vuetify],
      },
      props: {
        form: inputForm,
      },
    });
    expect(wrapper.vm.form).toMatchObject(inputForm);
  });

  test("test action form loads without errors", () => {
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
    const wrapper = mount(FormLoader, {
      global: {
        plugins: [vuetify],
      },
      props: {
        form: actionForm,
      },
    });
    expect(wrapper.vm.form).toMatchObject(actionForm);
  });
});
