// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import { Button, Icon, Tooltip } from "../../../classes/elements";
import { EasyButton } from "../../../components/elements";
import { ButtonTypes } from "../../../enums";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
});

global.ResizeObserver = import("resize-observer-polyfill");

describe("default easy button", () => {
  const processButton = new Button({
    type: ButtonTypes.Process,
  });
  const wrapper = mount(EasyButton, {
    global: {
      plugins: [vuetify],
    },
    props: {
      button: processButton,
      disabled: processButton.disabled,
      identifier: "testId",
    },
  });

  test("test default easy button passes button prop", () => {
    expect(wrapper.vm.button).toMatchObject(processButton);
  });

  test("test default easy button computed properties calculate correct values", () => {
    expect(wrapper.vm.has_prepend_icon).toBeFalsy();
    expect(wrapper.vm.has_append_icon).toBeFalsy();
  });

  test("test default easy button click emits event and data", async () => {
    wrapper.vm.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(wrapper.emitted().click[0]).toEqual(["testId"]);
  });

  test("test default easy button tooltip disabled", async () => {
    const tooltips = wrapper.findAllComponents({ name: "VTooltip" });
    // icon tooltips are no present
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].exists()).toBeTruthy();
    expect(tooltips[0].props().disabled).toBeTruthy();
  });

  test("test default easy button icons missing", async () => {
    const easyIcon = wrapper.findComponent({ name: "EasyIcon" });
    expect(easyIcon.exists()).toBe(false);
  });
});

describe("configured easy button", () => {
  const processButton = new Button({
    type: ButtonTypes.Process,
    disabled: false,
    tooltip: new Tooltip({
      text: "This is a button tooltip",
    }),
    prepend_icon: new Icon({
      icon: "mdi-home",
      tooltip: new Tooltip({
        text: "This is a prepended icon tooltip",
      }),
    }),
    append_icon: new Icon({
      icon: "mdi-close",
      tooltip: new Tooltip({
        text: "This is an appeneded icon tooltip",
      }),
    }),
  });
  const wrapper = mount(EasyButton, {
    global: {
      plugins: [vuetify],
    },
    props: {
      button: processButton,
      disabled: processButton.disabled,
      identifier: "",
    },
  });

  test("test configured easy button passes button prop", () => {
    expect(wrapper.vm.button).toMatchObject(processButton);
  });

  test("test configured easy button computed properties calculate correct values", () => {
    expect(wrapper.vm.has_prepend_icon).toBeTruthy();
    expect(wrapper.vm.has_append_icon).toBeTruthy();
  });

  test("test configured easy button click emits event and data", async () => {
    wrapper.vm.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });

  test("test configured easy button tooltip are set correctly", async () => {
    const tooltip = wrapper.findComponent({ name: "VTooltip" });
    expect(tooltip.exists()).toBeTruthy();
    expect(tooltip.props().disabled).toBeFalsy();
    // check mouseover TODO: html not present.
    // const describedBy = tooltip.props().activatorProps['aria-describedby']
    // const describedId = '#' + describedBy

    // await tooltip.trigger("mouseover")

    // check if we can find the overlay.
  });

  test("test configured easy button icons are set correctly", () => {
    const icons = wrapper.findAllComponents({ name: "VIcon" });
    expect(icons.length).toBe(2);
    // prepend should be first icon
    expect(icons[0].classes(processButton.prepend_icon.icon)).toBe(true);
    // prepend should be first icon
    expect(icons[1].classes(processButton.append_icon.icon)).toBe(true);
  });

  test("test configured easy button icons tooltips are set correctly", () => {
    const tooltips = wrapper.findAllComponents({ name: "VTooltip" });
    // At this point should be 3, button, prepend and append
    expect(tooltips.length).toBe(3);

    // check icon tooltips only
    expect(tooltips[1].exists()).toBeTruthy();
    expect(tooltips[1].props().disabled).toBeFalsy();

    expect(tooltips[2].exists()).toBeTruthy();
    expect(tooltips[2].props().disabled).toBeFalsy();
  });
});
