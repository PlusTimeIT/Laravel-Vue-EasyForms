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
<script setup lang="ts">
import { isEmpty } from "#/composables/utils/Types";
import { ActionIcon, ActionButton } from "#/classes/actions";
import { Ref, ref, ComputedRef, computed, watchEffect } from "vue";
import { ActionForm } from "#/classes/forms";
import { DataItem } from "#/classes/properties/DataItem";
import { EasyButton, EasyIcon } from "#/components/elements";

const props = defineProps<{
  form: ActionForm;
}>();

//  TODO: Action form events
// const emit = defineEmits<{
//   (e: "update:form", value: ActionForm | undefined): void;
//   (e: "loading", value: boolean): void;
//   (e: "loaded", value: boolean): void;
//   (e: "results", value: any): void;
//   (e: "cancelled", value: boolean): void;
//   (e: "updated", value: any): void;
//   (e: "reset_form", value: boolean): void;
// }>();

const form: Ref<ActionForm> = ref(props.form) as Ref<ActionForm>;
watchEffect(() => (form.value = props.form));

// const key: Ref<string> = ref(generate(10));

const filtered_actions: ComputedRef<Array<ActionIcon | ActionButton>> = computed(() => {
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
    const data: DataItem | undefined = form.value.additional_data.data.find(
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

async function runAction(action_identifier: string) {
  console.log("RUN ACTION", action_identifier);
  // const results = await form.value.process(action_identifier);
  // do something with results.
}
</script>
