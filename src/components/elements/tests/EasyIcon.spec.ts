// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import { Icon, Tooltip } from "#/classes/elements";
import EasyIcon from "#/components/elements/EasyIcon.vue";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
});

global.ResizeObserver = import("resize-observer-polyfill");

describe("default easy icon", () => {
  const icon = new Icon({
    icon: "mdi-home",
  });
  const wrapper = mount(EasyIcon, {
    global: {
      plugins: [vuetify],
    },
    props: {
      icon: icon,
      identifier: "testId",
    },
  });

  test("test default easy icon passes icon prop", () => {
    expect(wrapper.vm.icon).toMatchObject(icon);
  });

  test("test default easy icon click emits event and data", async () => {
    wrapper.vm.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(wrapper.emitted().click[0]).toEqual(["testId"]);
  });

  test("test default easy icon tooltip disabled", async () => {
    const tooltips = wrapper.findAllComponents({ name: "VTooltip" });
    // icon tooltips are no present
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].exists()).toBeTruthy();
    expect(tooltips[0].props().disabled).toBeTruthy();
  });
});

describe("configured easy icon", () => {
  const icon = new Icon({
    icon: "mdi-home",
    class: "spaced-evenly",
    color: "secondary",
    end: true,
    size: "large",
    start: true,
    tooltip: new Tooltip({
      text: "This is an icon tooltip",
    }),
  });
  const wrapper = mount(EasyIcon, {
    global: {
      plugins: [vuetify],
    },
    props: {
      icon: icon,
      identifier: "testId",
    },
  });

  test("test configured easy icon passes icon prop", () => {
    expect(wrapper.vm.icon).toMatchObject(icon);
  });

  test("test configured easy icon click emits event and data", async () => {
    wrapper.vm.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });

  test("test configured easy icons are set correctly", () => {
    const easyIcon = wrapper.findComponent({ name: "VIcon" });
    // has icon added
    expect(easyIcon.classes(icon.icon)).toBe(true);
    // has additional class added
    expect(easyIcon.classes(icon.class)).toBe(true);
    // check if other props are set correctly.
    expect(easyIcon.classes("text-" + icon.color)).toBe(true);
    expect(easyIcon.classes("v-icon--size-" + icon.size)).toBe(true);
    expect(easyIcon.classes("v-icon--start")).toBe(true);
    expect(easyIcon.classes("v-icon--end")).toBe(true);
  });

  test("test configured easy icon tooltip are set correctly", async () => {
    const tooltip = wrapper.findComponent({ name: "VTooltip" });
    expect(tooltip.exists()).toBeTruthy();
    expect(tooltip.props().disabled).toBeFalsy();
  });
});

describe("configured easy icon additional checks", () => {
  const icon = new Icon({
    icon: "mdi-home",
    class: "spaced-evenly upside-down",
  });
  const wrapper = mount(EasyIcon, {
    global: {
      plugins: [vuetify],
    },
    props: {
      icon: icon,
    },
  });

  test("test configured easy icon click emits event and empty data", async () => {
    wrapper.vm.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(wrapper.emitted().click[0]).toEqual([""]);
  });

  test("test configured easy icon applies multiple classes", () => {
    const easyIcon = wrapper.findComponent({ name: "VIcon" });
    const setClasses = icon.class.split(" ");
    expect(setClasses.filter((r) => easyIcon.classes().includes(r)).length).toEqual(setClasses.length);
  });
});
