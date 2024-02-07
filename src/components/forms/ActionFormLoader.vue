<script setup lang="ts">
import { isEmpty } from "../../composables/utils";
import { ActionIcon, ActionButton } from "../../classes/actions";
import { ref, computed, watchEffect, onBeforeUnmount, onMounted } from "vue";
import { ActionForm } from "../../classes/forms";
import { DataItem } from "../../classes/properties";
import { ActionFormType } from "../../composables/validation/PropValidation";
import { LoaderEvents } from "../../enums";
import { loadRecaptcha } from "../../composables/Recaptcha";

/**
 * ActionFormProps represents the props for the InputForm component.
 *
 * @interface ActionFormProps
 */
interface ActionFormProps {
  form: ActionForm;
}

const props: ActionFormProps = defineProps({
  form: {
    type: ActionForm,
    required: true,
    validator: (value: ActionForm) => ActionFormType(value),
  },
});

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

const loadedForm = ref<ActionForm>(props.form);
const hasRecaptcha = computed<boolean>(() => !isEmpty(loadedForm.value.google_recaptcha_site_key));
const formWatcher = watchEffect(() => (loadedForm.value = props.form));

const filteredActions = computed<Array<ActionIcon | ActionButton>>(() => {
  return (loadedForm.value?.actions ?? []).filter((action: any) => {
    return checkConditionals(action);
  });
});

const isFormInline = computed<boolean>(() => loadedForm.value.inline);

function getCols(action: ActionIcon | ActionButton) {
  return isFormInline.value ? "auto" : action.cols;
}

/**
 * Checks conditions for an action to determine if it should be executed.
 *
 * @param {ActionButton | ActionIcon} action - The action to be checked.
 * @returns {boolean} Returns true if all conditions are met, otherwise false.
 *
 * @throws {Error} Throws an error if an unsupported operator is encountered.
 *
 * @example
 * // Example usage:
 * const action = {
 *   conditions: [
 *     { check: 'status', operator: '==', against: 'active' },
 *     { check: 'type', operator: '!=', against: 'inactive' },
 *   ],
 * };
 * const result = checkConditionals(action, additionalData);
 * // result will be true in this example.
 */
function checkConditionals(action: ActionButton | ActionIcon): boolean {
  if (isEmpty(action.conditions)) {
    // No conditionals to check - passed.
    return true;
  }

  return action.conditions.every((condition) => {
    const data: DataItem | undefined = loadedForm.value.additional_data.find(
      (data: DataItem) => data.key == condition.check,
    );

    if (isEmpty(data)) {
      // Condition data not found - failed.
      return false;
    }

    switch (condition.operator) {
      case "==":
        return data?.value === condition.against;
      case "!=":
        return data?.value !== condition.against;
      case ">":
        return data?.value > condition.against;
      case "<":
        return data?.value < condition.against;
      case ">=":
        return data?.value >= condition.against;
      case "<=":
        return data?.value <= condition.against;
      default:
        // Handle unsupported operators or throw an error
        throw new Error(`Unsupported operator: ${condition.operator}`);
    }
  });
}

function isLoading(loading: boolean) {
  loadedForm.value.isLoading(loading);
  emit(LoaderEvents.Loading, loading);
}

async function runAction(action_identifier: string) {
  emit(LoaderEvents.Processing, true);
  isLoading(true);
  // Handle the process button click logic here
  const win = window as any;
  let results: any;
  if (hasRecaptcha.value && win.grecaptcha) {
    win.grecaptcha.ready(function () {
      win.grecaptcha
        .execute(loadedForm.value.google_recaptcha_site_key, {
          action: `process_form_${loadedForm.value.name.replace("\\", "_")}_${action_identifier.replace("\\", "_")}`,
        })
        .then(async function (token: any) {
          results = await loadedForm.value.process(action_identifier, token)
        });
    });
  } else {
    results = await loadedForm.value.process(action_identifier);
  }
  if (!results) {
    emit(LoaderEvents.Failed, true);
    isLoading(false);
    return;
  }
  emit(LoaderEvents.Successful, true);
  if (loadedForm.value.axios.expecting_results) {
    emit(LoaderEvents.Results, results);
  }
}

onBeforeUnmount(() => {
  formWatcher();
});

onMounted(() => {
  if (hasRecaptcha.value) {
    loadRecaptcha(loadedForm.value.google_recaptcha_site_key as string);
  }
});
</script>

<template>
  <VCol :cols="12">
    <VRow :justify="loadedForm.justify_row">
      <VCol v-for="(action, index) in filteredActions" :key="index" :cols="getCols(action)" class="py-0 px-2">
        <EasyIcon
          v-if="!isEmpty((action as ActionIcon).icon)"
          :icon="(action as ActionIcon).icon"
          :identifier="action.identifier"
          @click="runAction(action.identifier)"
        />
        <EasyButton
          v-if="!isEmpty((action as ActionButton).button)"
          :button="(action as ActionButton).button"
          :identifier="action.identifier"
          :disabled="false"
          @click="runAction(action.identifier)"
        />
      </VCol>
    </VRow>
  </VCol>
</template>
