<script setup lang="ts">
import { isEmpty } from "../../composables/utils";
import { ActionIcon, ActionButton } from "../../classes/actions";
import { ref, computed, watchEffect, onBeforeUnmount } from "vue";
import { ActionForm } from "../../classes/forms";
import { DataItem } from "../../classes/properties/DataItem";
import { EasyButton, EasyIcon } from "../../components/elements";
import { ActionInputFormType } from "../../composables/validation/PropValidation";
import { LoaderEvents } from "../../enums";

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
    validator: (value: ActionForm) => ActionInputFormType(value),
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

const form = ref<ActionForm>(props.form);
const formWatcher = watchEffect(() => (form.value = props.form));

const filtered_actions = computed<Array<ActionIcon | ActionButton>>(() => {
  return (form.value?.actions ?? []).filter((action: any) => {
    return checkConditionals(action);
  });
});

function getCols(action: ActionIcon | ActionButton) {
  return form.value.inline ? "auto" : action.cols;
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
    const data: DataItem | undefined = form.value.additional_data.find((data: DataItem) => data.key == condition.check);

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
  form.value.isLoading(loading);
  emit(LoaderEvents.Loading, loading);
}

async function runAction(action_identifier: string) {
  emit(LoaderEvents.Processing, true);
  isLoading(true);
  // Handle the process button click logic here
  const results = await form.value.process(action_identifier);
  if (!results) {
    emit(LoaderEvents.Failed, true);
    isLoading(false);
    return;
  }
  emit(LoaderEvents.Successful, true);
  if (form.value.axios.expecting_results) {
    emit(LoaderEvents.Results, results);
  }
}

onBeforeUnmount(() => {
  formWatcher();
});
</script>

<template>
  <v-row :justify="form.justify_row">
    <v-col v-for="(action, index) in filtered_actions" :key="index" :cols="getCols(action)" class="py-0 px-2">
      <easy-icon
        v-if="!isEmpty((action as ActionIcon).icon)"
        :icon="(action as ActionIcon).icon"
        :identifier="action.identifier"
        @click="runAction(action.identifier)"
      />
      <easy-button
        v-if="!isEmpty((action as ActionButton).button)"
        :button="(action as ActionButton).button"
        :identifier="action.identifier"
        :disabled="false"
        @click="runAction(action.identifier)"
      />
    </v-col>
  </v-row>
</template>
