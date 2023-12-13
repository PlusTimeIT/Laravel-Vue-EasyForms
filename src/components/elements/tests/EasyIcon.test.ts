import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { Icon, Tooltip } from "../../../classes/elements";
import { EasyIcon } from "../../../components/elements";
import { testWrapper } from "../../../test-utils";

describe("default easy icon", () => {
  const icon = new Icon({
    icon: "mdi-home",
  });
  const wrapper = mount(EasyIcon, {
    ...testWrapper,
    props: {
      icon: icon,
      identifier: "testId",
    },
  });

  test("can pass icon prop", () => {
    expect(wrapper.vm.icon).toMatchObject(icon);
  });

  test("click emits event and data", async () => {
    await wrapper.find("i").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(wrapper.emitted().click[0]).toEqual(["testId"]);
  });

  test("tooltip is disabled", async () => {
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
    classes: "spaced-evenly",
    color: "secondary",
    end: true,
    size: "large",
    start: true,
    tooltip: new Tooltip({
      text: "This is an icon tooltip",
    }),
  });
  const wrapper = mount(EasyIcon, {
    ...testWrapper,
    props: {
      icon: icon,
      identifier: "testId",
    },
  });

  test("can pass icon prop", () => {
    expect(wrapper.vm.icon).toMatchObject(icon);
  });

  test("click emits event and data", async () => {
    await wrapper.find("i").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });

  test("icons are set correctly", () => {
    const easyIcon = wrapper.findComponent({ name: "VIcon" });
    // has icon added
    expect(easyIcon.classes(icon.icon)).toBe(true);
    // has additional class added
    expect(easyIcon.classes(icon.classes as string)).toBe(true);
    // check if other props are set correctly.
    expect(easyIcon.classes("text-" + icon.color)).toBe(true);
    expect(easyIcon.classes("v-icon--size-" + icon.size)).toBe(true);
    expect(easyIcon.classes("v-icon--start")).toBe(true);
    expect(easyIcon.classes("v-icon--end")).toBe(true);
  });

  test("tooltip are set correctly", async () => {
    const tooltip = wrapper.findComponent({ name: "VTooltip" });
    expect(tooltip.exists()).toBeTruthy();
    expect(tooltip.props().disabled).toBeFalsy();
  });
});

describe("icon additional checks", () => {
  const icon = new Icon({
    icon: "mdi-home",
    classes: "spaced-evenly upside-down",
  });
  const wrapper = mount(EasyIcon, {
    ...testWrapper,
    props: {
      icon: icon,
    },
  });

  test("click emits event and empty data", async () => {
    await wrapper.find("i").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(wrapper.emitted().click[0]).toEqual([""]);
  });

  test("can apply multiple classes", () => {
    const easyIcon = wrapper.findComponent({ name: "VIcon" });
    const setClasses = icon?.classes?.split(" ") ?? [];
    expect(setClasses.filter((r) => easyIcon.classes().includes(r)).length).toEqual(setClasses.length);
  });
});
