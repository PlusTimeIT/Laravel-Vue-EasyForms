import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { Button, Icon, Tooltip } from "../../../classes/elements";
import { EasyButton } from "../../../components/elements";
import { ButtonTypes } from "../../../enums";
import { testWrapper } from "../../../test-utils/wrapper";

describe("default easy button", () => {
  const processButton = new Button({
    type: ButtonTypes.Process,
  });
  const wrapper = mount(EasyButton, {
    ...testWrapper,
    props: {
      button: processButton,
      disabled: processButton.disabled,
      identifier: "testId",
    },
  });

  test("builds a v-btn", () => {
    const button = wrapper.findComponent({ name: "VBtn" });
    expect(button.exists()).toBeTruthy();
  });

  test("can pass button prop", () => {
    expect(wrapper.vm.button).toMatchObject(processButton);
  });

  test("computed properties calculate correct values", () => {
    expect((wrapper.vm as any)["has_prepend_icon"]).toBeFalsy();
    expect((wrapper.vm as any)["has_append_icon"]).toBeFalsy();
  });

  test("click emits event and data", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(wrapper.emitted().click[0]).toEqual(["testId"]);
  });

  test("tooltip is disabled", () => {
    const tooltips = wrapper.findAllComponents({ name: "VTooltip" });
    // icon tooltips are no present
    expect(tooltips.length).toBe(1);
    expect(tooltips[0].exists()).toBeTruthy();
    expect(tooltips[0].props().disabled).toBeTruthy();
  });

  test("icons are missing", () => {
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
        text: "This is an appended icon tooltip",
      }),
    }),
  });
  const wrapper = mount(EasyButton, {
    ...testWrapper,
    props: {
      button: processButton,
      disabled: processButton.disabled,
      identifier: "testId",
    },
  });

  test("builds a v-btn", () => {
    const button = wrapper.findComponent({ name: "VBtn" });
    expect(button.exists()).toBeTruthy();
  });

  test("can pass button prop", () => {
    expect(wrapper.vm.button).toMatchObject(processButton);
  });

  test("computed properties calculate correct values", () => {
    expect((wrapper.vm as any)["has_prepend_icon"]).toBeTruthy();
    expect((wrapper.vm as any)["has_append_icon"]).toBeTruthy();
  });

  test("click emits event and data", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });

  test("tooltip is set correctly", async () => {
    const tooltip = wrapper.findComponent({ name: "VTooltip" });
    expect(tooltip.exists()).toBeTruthy();
    expect(tooltip.props().disabled).toBeFalsy();
    expect(tooltip?.props().text).toContain(processButton?.tooltip?.text);
  });

  test("icons are set correctly", () => {
    const icons = wrapper.findAllComponents({ name: "VIcon" });
    expect(icons.length).toBe(2);
    // prepend should be first icon
    expect(icons[0].classes(processButton?.prepend_icon?.icon ?? "")).toBe(true);
    // prepend should be first icon
    expect(icons[1].classes(processButton?.append_icon?.icon ?? "")).toBe(true);
  });

  test("icon tooltips are set correctly", () => {
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
