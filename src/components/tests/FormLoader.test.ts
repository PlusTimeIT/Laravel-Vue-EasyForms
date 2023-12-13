import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import FormLoader from "../../components/FormLoader.vue";
import { FormContainer } from "../../classes/elements";
import { ActionForm, InputForm } from "../../classes/forms";
import { FormTypes, LoaderEvents } from "../../enums";
import { Csrf } from "../../classes/server";
import { testWrapper, basicInputForm, basicActionForm } from "../../test-utils";

describe("form loader", () => {
  test("test if form throws error on unknown form - nothing provided", () => {
    const wrapper = mount(FormLoader, {
      ...testWrapper,
    });
    expect((wrapper.vm as any)["form_component"]).toEqual("error-form");
  });

  test("test input form loads locally without errors", () => {
    const inputForm = new InputForm({ ...basicInputForm });
    const wrapper = mount(FormLoader, {
      ...testWrapper,
      props: {
        form: inputForm,
      },
    });
    expect((wrapper.vm as any).form as InputForm).toMatchObject(inputForm);
  });

  test("test action form loads locally without errors", () => {
    const actionForm = new ActionForm({ ...basicActionForm });
    const wrapper = mount(FormLoader, {
      ...testWrapper,
      props: {
        form: actionForm,
      },
    });
    expect(wrapper.vm.form).toMatchObject(actionForm);
  });
});
describe("form loader - emits events", () => {
  const inputForm = new InputForm({ ...basicInputForm });
  const wrapper = mount(FormLoader, {
    ...testWrapper,
    props: {
      form: inputForm,
    },
  });
  test("test if form emits default loading events", () => {
    expect((wrapper.emitted()[LoaderEvents.Loading] as Array<any>).length).toBe(2);
  });
  test("test if form emits default loaded event", () => {
    expect((wrapper.emitted()[LoaderEvents.Loaded] as Array<any>).length).toBe(1);
  });
});
describe("form loader - computed properties", () => {
  describe("testing locally loaded form.", () => {
    const inputForm = new InputForm({ ...basicInputForm });
    const wrapper = mount(FormLoader, {
      ...testWrapper,
      props: {
        form: inputForm,
      },
    });
    test("test requires api check - form provided (no check required)", () => {
      expect((wrapper.vm as any)["requires_api"]).toBeFalsy();
    });
    test("test csrf class is loaded and correct instance", () => {
      expect((wrapper.vm as any)["csrf"]).toBeInstanceOf(Csrf);
    });
    test("test loading should be false", () => {
      expect((wrapper.vm as any)["loading"]).toBeFalsy();
    });
    test("test loaded form is loaded and correct instance", () => {
      expect((wrapper.vm as any)["loaded_form"]).toBeInstanceOf(InputForm);
      expect((wrapper.vm as any)["loaded_form"]).toMatchObject(inputForm);
    });
    test("test form container loads correct instance and default values", () => {
      expect((wrapper.vm as any)["container"]).toBeInstanceOf(FormContainer);
      expect(((wrapper.vm as any)["container"] as FormContainer).cols).toBe(12);
      expect(((wrapper.vm as any)["container"] as FormContainer).sm).toBe(12);
      expect(((wrapper.vm as any)["container"] as FormContainer).md).toBe(12);
      expect(((wrapper.vm as any)["container"] as FormContainer).lg).toBe(12);
    });
    test("test form does not have error text", () => {
      expect((wrapper.vm as any)["has_error"]).toBeFalsy();
    });
    test("test csrf token is invalid", () => {
      expect((wrapper.vm as any)["has_valid_csrf_token"]).toBeFalsy();
    });
    test("test csrf token is not loading", () => {
      expect((wrapper.vm as any)["is_csrf_token_loading"]).toBeFalsy();
    });
    test("test form can check for alerts", () => {
      expect((wrapper.vm as any)["has_alerts"]).toBeTruthy();
    });
    test("test form is ready", () => {
      expect((wrapper.vm as any)["form_ready"]).toBeTruthy();
    });
    test("test form component is Input Form", () => {
      expect((wrapper.vm as any)["form_component"]).toBe(FormTypes.Input);
    });
    test("test is action returns false", () => {
      expect((wrapper.vm as any)["is_action"]).toBeFalsy();
    });
    test("test is input returns true", () => {
      expect((wrapper.vm as any)["is_input"]).toBeTruthy();
    });
    test("test is error returns false", () => {
      expect((wrapper.vm as any)["is_error"]).toBeFalsy();
    });
  });
});
describe("form loader - functions and events", () => {
  const inputForm = new InputForm({ ...basicInputForm });
  const wrapper = mount(FormLoader, {
    ...testWrapper,
    props: {
      form: inputForm,
    },
  });
  test("test if form can be reset and emits event", () => {
    (wrapper.vm.form as InputForm).fields[0].value = "ChangedValue";
    (wrapper.vm as any)["reset"]();
    expect((wrapper.emitted()[LoaderEvents.Reset] as Array<any>)[0][0]).toBeTruthy();
    expect((wrapper.vm.form as InputForm).fields[0].value).toBeUndefined();
  });
  test("test if form can be cancelled and emits event", () => {
    (wrapper.vm as any)["cancel"]();
    expect((wrapper.emitted()[LoaderEvents.Cancelled] as Array<any>)[0][0]).toBeTruthy();
  });
  test("test if processing form emits event", () => {
    (wrapper.vm as any)["processing"](true);
    expect((wrapper.emitted()[LoaderEvents.Processing] as Array<any>)[0][0]).toBeTruthy();
  });
  test("test if form fails and emits event", () => {
    (wrapper.vm as any)["failed"]();
    expect((wrapper.emitted()[LoaderEvents.Failed] as Array<any>)[0][0]).toBeTruthy();
  });
  test("test if form updates and emits event", () => {
    (wrapper.vm as any)["updated"](inputForm);
    expect((wrapper.emitted()[LoaderEvents.Updated] as Array<any>)[0][0]).toBeInstanceOf(InputForm);
  });
  test("test if form can be successful and emits event", () => {
    (wrapper.vm as any)["success"]();
    expect((wrapper.emitted()[LoaderEvents.Successful] as Array<any>)[0][0]).toBeTruthy();
  });
  test("test if form can return results and emits event", () => {
    const returnData = { test: "this is just a just" };
    (wrapper.vm as any)["results"](returnData);
    expect((wrapper.emitted()[LoaderEvents.Results] as Array<any>)[0][0]).toMatchObject(returnData);
    expect(((wrapper.vm as any)["loaded_form"] as InputForm).results).toMatchObject(returnData);
  });
  test("test if form status can be updated and emits event", () => {
    expect((wrapper.emitted()[LoaderEvents.Loading] as Array<any>).length).toBe(2);

    (wrapper.vm as any)["isLoading"](true);
    expect((wrapper.vm as any)["loading"]).toBeTruthy();

    expect((wrapper.emitted()[LoaderEvents.Loading] as Array<any>)[2][0]).toBeTruthy();
    (wrapper.vm as any)["isLoading"](false);
    expect((wrapper.vm as any)["loading"]).toBeFalsy();
    expect((wrapper.emitted()[LoaderEvents.Loading] as Array<any>)[3][0]).toBeFalsy();
  });
});
