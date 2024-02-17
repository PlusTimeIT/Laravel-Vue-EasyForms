<script setup lang="ts">
/**
 * @component FormLoader
 * @description This is a Vue 3 component for loading and rendering forms.
 */
import { ref, computed, watch, onBeforeMount, onBeforeUnmount } from "vue";
import { ColumnRestriction } from "../composables/validation/PropValidation";
import { ActionForm, InputForm, EasyForm } from "../classes/forms";
import { AdditionalData, FormLoader } from "../classes/properties";
import { isEmpty } from "../composables/utils";
import { ActionFormLoader, InputFormLoader, ErrorFormLoader } from "../components/forms";
import { FormContainer } from "../classes/elements";
import { LoaderEvents } from "../enums";
import { FormTypes } from "../enums";
import { store } from "../composables/utils";
import { AlertTriggers } from "../enums";
import { Csrf } from "../server";
import EasyLoader from "./elements/EasyLoader.vue";
import { PluginOptions } from "../classes/PluginOptions";

const emit = defineEmits(["update:form", ...Object.values(LoaderEvents)]);

const props = defineProps({
  form: {
    type: [ActionForm, InputForm, EasyForm],
    default: new EasyForm({ name: "default" }),
  },
  name: {
    type: String,
    default: "",
  },
  cols: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  sm: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  md: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  lg: {
    type: Number,
    default: 12,
    validator: (value: number) => ColumnRestriction(value),
  },
  populate: {
    type: Boolean,
    default: false,
  },
  additionalData: {
    type: Array<AdditionalData>,
    default: [],
  },
  additionalLoadData: {
    type: Array<AdditionalData>,
    default: [],
  },
});

const PLUGIN_OPTIONS = PluginOptions.getInstance();
const requires_api = ref<boolean>(false);
const csrf = ref<Csrf>((store.csrf ?? new Csrf()) as Csrf);
const loading = ref<boolean>(true);

const loaded_form = ref<InputForm | ActionForm | EasyForm>(props.form);
const container = computed<FormContainer>(() => {
  return new FormContainer({
    cols: props.cols,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
  });
});

const has_error = computed<boolean>(() => !isEmpty(loaded_form.value!.text));
const has_valid_csrf_token = computed<boolean>(() =>
  PLUGIN_OPTIONS.csrf_endpoint === null ? true : csrf.value.isValidCsrfToken(),
);
const is_csrf_token_loading = computed<boolean>(() => csrf.value.isLoading());
const has_alerts = computed<boolean>(
  () => (loaded_form?.value?.alerts?.filter((alert) => alert.display).length ?? 0) > 0,
);
const form_ready = computed<boolean>(() => {
  return (
    !loaded_form.value.loading &&
    (loaded_form.value instanceof InputForm ||
      loaded_form.value instanceof ActionForm ||
      !isEmpty(loaded_form.value?.text))
  );
});

const form_component = computed<string | undefined>(() => {
  if (!loading.value || !isEmpty(loaded_form.value.name)) {
    if (loaded_form.value instanceof InputForm) {
      return FormTypes.Input;
    }

    if (loaded_form.value instanceof ActionForm) {
      return FormTypes.Action;
    }
  }
  return FormTypes.Error;
});

const is_action = computed<boolean>(() => {
  return form_component.value === FormTypes.Action;
});

const is_input = computed<boolean>(() => {
  return form_component.value === FormTypes.Input;
});

const is_error = computed<boolean>(() => {
  return form_component.value === FormTypes.Error;
});

function reset() {
  emit(LoaderEvents.Reset, true);
  loaded_form.value?.reset();
}

function cancel() {
  emit(LoaderEvents.Cancelled, true);
  loaded_form.value?.cancelled();
}

function processing(processing: boolean) {
  emit(LoaderEvents.Processing, processing);
}

function failed() {
  emit(LoaderEvents.Failed, true);
}

function updated(form: InputForm | ActionForm) {
  emit(LoaderEvents.Updated, form);
}

function success() {
  emit(LoaderEvents.Successful, true);
}

function results(data: any) {
  loaded_form.value.hasResults(data);
  emit(LoaderEvents.Results, data);
}

function validated(event: any) {
  emit(LoaderEvents.Validated, event);
}

function isLoading(load: boolean) {
  emit(LoaderEvents.Loading, load);
  // if loading false
  loaded_form.value.isLoading(load);
  loading.value = load;
}

const validCsrfWatcher = watch(has_valid_csrf_token, async (validToken) => {
  if (requires_api.value && validToken) {
    // Requires API and call is ready to be made.
    // load Form.
    await load();
  }
});

onBeforeUnmount(() => {
  validCsrfWatcher();
});

onBeforeMount(async () => {
  isLoading(true);
  if (!isEmpty(props.form) && isEmpty(props.name)) {
    requires_api.value = false;
    loaded_form.value = props.form;
    loaded_form.value.additional_data = props.additionalData;
    loaded_form.value.additional_load_data = props.additionalLoadData;
    isLoading(false);
    emit(LoaderEvents.Loaded, true);
  } else if (!isEmpty(props.name)) {
    requires_api.value = true;
    if (has_valid_csrf_token.value) {
      await load();
    } else if (!is_csrf_token_loading.value) {
      const tokenCheck = await csrf.value.fetchNewToken();
      if (!tokenCheck) {
        // display error.
        loaded_form.value.text = csrf.value.error_message;
        isLoading(false);
      }
    }
  }
});

async function load() {
  loaded_form.value.name = props.name;
  //set additional load data before load.
  loaded_form.value.additional_load_data = props.additionalLoadData;
  const results: any = await loaded_form.value.load();
  if (!results) {
    loaded_form.value.text = "Error Loading Form - Not Found";
    emit(LoaderEvents.Loaded, false);
  } else if (results?.type == FormTypes.Input) {
    loaded_form.value = new InputForm(results);
    loaded_form.value.triggerAlert(AlertTriggers.AfterLoad);
    emit(LoaderEvents.Loaded, true);
  } else if (results.type == FormTypes.Action) {
    loaded_form.value = new ActionForm(results);
    emit(LoaderEvents.Loaded, true);
  }

  // set additional data and load data again after load.
  loaded_form.value.additional_data = props.additionalData;
  loaded_form.value.additional_load_data = props.additionalLoadData;
  isLoading(false);
}
</script>

<template>
  <VCol :cols="container?.cols ?? 12" :sm="container?.sm ?? 12" :md="container?.md ?? 12" :lg="container?.lg ?? 12">
    <VRow v-show="!form_ready" justify="center" class="easy-loader">
      <EasyLoader :loader="loaded_form?.loader as FormLoader" />
    </VRow>
    <VRow v-show="loaded_form.show_title" class="easy-title">
      <VCol class="pl-6 text-h3 text-h6">
        {{ loaded_form.title }}
      </VCol>
    </VRow>
    <VRow v-if="has_alerts" class="easy-alerts">
      <EasyAlerts :alerts="loaded_form?.alerts" />
    </VRow>
    <VRow v-show="form_ready" no-gutters class="easy-form">
      <InputFormLoader
        v-if="is_input && !has_error"
        v-model:form="loaded_form as InputForm"
        v-bind="loaded_form!.props()"
        @results="results"
        @loading="isLoading"
        @reset="reset"
        @updated="updated"
        @cancelled="cancel"
        @processing="processing"
        @failed="failed"
        @successful="success"
        @validated="validated"
      />
      <ActionFormLoader
        v-else-if="is_action && !has_error"
        v-model:form="loaded_form as ActionForm"
        v-bind="loaded_form!.props()"
        @results="results"
        @loading="isLoading"
        @reset="reset"
        @updated="updated"
        @cancelled="cancel"
        @processing="processing"
        @failed="failed"
        @successful="success"
        @validated="validated"
      />
      <ErrorFormLoader v-else-if="is_error || has_error" :text="loaded_form.text" />
    </VRow>
  </VCol>
</template>
