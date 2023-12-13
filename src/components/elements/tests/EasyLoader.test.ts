import { mount } from "@vue/test-utils";
import EasyLoader from "../EasyLoader.vue";
import { describe, expect, test } from "vitest";
import { testWrapper } from "../../../test-utils/wrapper";
import { FormLoader } from "../../../classes/properties";
import { FormLoaderTypes } from "../../../enums";
import { ProgressCircular, ProgressLinear } from "../../../classes/elements";

const loader: FormLoader = new FormLoader();

const wrapper = mount(EasyLoader, {
  ...testWrapper,
  props: { loader: loader },
});

describe("default easy loader", () => {
  test("builds a v-progress-circular", async () => {
    const circular = wrapper.findComponent({ name: "VProgressCircular" });
    expect(circular.exists).toBeTruthy();
  });
});

describe("configured easy loader", () => {
  test("loads form loader object", async () => {
    const loader: FormLoader = new FormLoader({
      type: FormLoaderTypes.Circular,
      progress: new ProgressCircular({
        classes: "text-pink",
        bg_color: "black",
        color: "white",
      }),
    });
    const wrapper = mount(EasyLoader, {
      ...testWrapper,
      props: { loader: loader },
    });

    expect(wrapper.vm.loader).toMatchObject(loader);
  });
  test("builds a v-progress-circular", async () => {
    const loader: FormLoader = new FormLoader({
      type: FormLoaderTypes.Circular,
      progress: new ProgressCircular({
        classes: "text-pink",
        bg_color: "black",
        color: "white",
      }),
    });
    const wrapper = mount(EasyLoader, {
      ...testWrapper,
      props: { loader: loader },
    });

    const circular = wrapper.findComponent({ name: "VProgressCircular" });
    expect(circular.exists).toBeTruthy();
  });
  test("builds a v-linear-circular", async () => {
    const loader: FormLoader = new FormLoader({
      type: FormLoaderTypes.Linear,
      progress: new ProgressLinear({
        classes: "text-pink",
        bg_color: "black",
        color: "white",
      }),
    });
    const wrapper = mount(EasyLoader, {
      ...testWrapper,
      props: { loader: loader },
    });

    const circular = wrapper.findComponent({ name: "VProgressLinear" });
    expect(circular.exists).toBeTruthy();
  });
});
