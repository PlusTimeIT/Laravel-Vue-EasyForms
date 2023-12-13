import { mount } from "@vue/test-utils";
import EasyAlerts from "../EasyAlerts.vue";
import { Alert, Icon } from "../../../classes/elements";
import { describe, test, expect } from "vitest";
import { testWrapper } from "../../../test-utils";

const alerts: Alert[] = [
  new Alert({
    cols: 12,
    display: true,
    prepend_icon: new Icon({ icon: "mdi-star" }),
    text: "Test alert with icons",
  }),
  new Alert({
    cols: 12,
    display: true,
    append_icon: new Icon({ icon: "mdi-close" }),
    text: "Test alert with icons 2",
  }),
  new Alert({
    cols: 12,
    display: true,
    prepend_icon: new Icon({ icon: "mdi-home" }),
    append_icon: new Icon({ icon: "mdi-circle" }),
    text: "Test alert with icons 3",
  }),
];

const wrapper = mount(EasyAlerts, {
  ...testWrapper,
  props: { alerts: alerts },
});

describe("default easy alerts", () => {
  test("builds a v-alert", async () => {
    const alerts = wrapper.findAllComponents({ name: "VAlert" });
    expect(alerts.length).toBe(3);
  });

  test("can prepend icons", async () => {
    const icons = wrapper.findAllComponents({ name: "VIcon" });
    expect(icons[0].classes()).toContain(alerts[0]?.prepend_icon?.icon);
  });

  test("can append icons", async () => {
    const icons = wrapper.findAllComponents({ name: "VIcon" });
    expect(icons[2].classes()).toContain(alerts[1]?.append_icon?.icon);
  });

  test("can prepend and append icons", async () => {
    const icons = wrapper.findAllComponents({ name: "VIcon" });
    expect(icons[3].classes()).toContain(alerts[2]?.prepend_icon?.icon);
    expect(icons[4].classes()).toContain(alerts[2]?.append_icon?.icon);
  });
});
