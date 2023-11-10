<script setup lang="ts">
/**
 * @component FormLoader
 * @description This is a Vue 3 component for loading and rendering forms.
 */
import { ref, computed, watch, onBeforeMount, onBeforeUnmount } from "vue";
import { ColumnRestriction } from "../composables/validation/PropValidation";
import { ActionForm, InputForm, EasyForm } from "../classes/forms";
import EasyAlerts from "../components/elements/EasyAlerts.vue";
import { AdditionalData } from "../classes/properties";
import { isEmpty } from "../composables/utils";
import { FormContainer, ProgressCircular } from "../classes/elements";
import { FormLoaderTypes, LoaderEvents } from "../enums";
import { FormTypes } from "../enums";
import { store } from "../composables/utils";
import { AlertTriggers } from "../enums/AlertTriggers";
import { Csrf } from "../server";

const emit = defineEmits([
  "update:form",
  LoaderEvents.Loading,
  LoaderEvents.Loaded,
  LoaderEvents.Results,
  LoaderEvents.Cancelled,
  LoaderEvents.Updated,
  LoaderEvents.Reset,
  LoaderEvents.Processing,
  LoaderEvents.Failed,
  LoaderEvents.Successful,
]);

const props = defineProps({
  form: {
    type: [ActionForm, InputForm, EasyForm],
    default: new EasyForm(),
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

const requires_api = ref<boolean>(false);
const csrf = ref<Csrf>(store.csrf);
const loading = ref<boolean>(true);
// loaded as easy form incase name is passed or error on form
const loaded_form = ref<InputForm | ActionForm | EasyForm>(
  new EasyForm({
    loader: {
      type: FormLoaderTypes.Circular,
      progress: new ProgressCircular({ indeterminate: true, color: "primary" }),
    },
  }),
);
const container = computed<FormContainer>(() => {
  return new FormContainer({
    cols: props.cols,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
  });
});
const has_error = computed<boolean>(() => !isEmpty(loaded_form.value!.text));
const has_valid_csrf_token = computed<boolean>(() => csrf.value.isValidCsrfToken());
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
    isLoading(false);
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
  loaded_form.value = new EasyForm({
    name: props.name,
    additional_data: props.additionalData,
    additional_load_data: props.additionalLoadData,
  });

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
  isLoading(false);
}
</script>

<template>
  <v-col :cols="container.cols" :sm="container.sm" :md="container.md" :lg="container.lg">
    <v-row v-if="has_alerts">
      <easy-alerts :alerts="loaded_form?.alerts"></easy-alerts>
    </v-row>
    <v-row v-show="!form_ready" justify="center" class="form-loader">
      <v-col cols="auto" :class="loaded_form.loader?.progress?.class ?? ''">
        <v-progress-circular
          v-if="loaded_form.loader?.type === FormLoaderTypes.Circular"
          v-bind="loaded_form.loader?.progress.props()"
        ></v-progress-circular>
        <v-progress-linear
          v-if="loaded_form.loader?.type === FormLoaderTypes.Linear"
          v-bind="loaded_form.loader?.progress.props()"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row v-show="form_ready">
      <input-form-loader
        v-if="form_component == FormTypes.Input && !has_error"
        v-model:form="loaded_form"
        v-bind="loaded_form!.props()"
        @results="results"
        @loading="isLoading"
        @reset="reset"
        @updated="updated"
        @cancelled="cancel"
        @processing="processing"
        @failed="failed"
        @successful="success"
      />
      <action-form-loader
        v-else-if="form_component == FormTypes.Action && !has_error"
        v-model:form="loaded_form"
        v-bind="loaded_form!.props()"
        @results="results"
        @loading="isLoading"
        @reset="reset"
        @updated="updated"
        @cancelled="cancel"
        @processing="processing"
        @failed="failed"
        @successful="success"
      />
      <error-form-loader v-else-if="form_component == FormTypes.Error || has_error" :text="loaded_form.text" />
    </v-row>
  </v-col>
</template>
