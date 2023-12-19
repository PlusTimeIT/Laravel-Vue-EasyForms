<script setup lang="ts">
import { ref, computed } from "vue";
import { isEmpty } from "../../composables/utils";
import { CheckboxGroupField, CheckboxField, SwitchField } from "../../classes/fields";
import { CheckboxGroupValue } from "../../classes/properties/CheckboxGroupValue";

interface Props {
  class?: string | undefined;
  cols?: string | number | undefined;
  items: CheckboxField[];
  label?: string | undefined;
  switch?: SwitchField | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  cols: 12,
  class: "ml-auto",
  label: "",
  switch: undefined,
});

const emit = defineEmits<{
  (e: "validated", value: string | undefined): void;
  (e: "invalidated", value: string | undefined): void;
  (e: "update:modelValue", value: any | undefined): void;
}>();

// Create a reference to the CheckboxGroupField object
const group = ref<CheckboxGroupField>(
  new CheckboxGroupField({
    label: props.label,
    items: props.items,
    switch: props.switch,
    class: props.class,
  }),
);

// Check if a switch is defined for the group
const has_switch = computed<boolean>(() => {
  return !isEmpty(props.switch);
});

/**
 * Update the switch value when the switch is clicked.
 * @param {boolean} value - The new value of the switch.
 * @param {boolean} auto_switch - Whether the switch is automatically updated.
 */
function updatedSwitch(value: any, auto_switch = false) {
  if (!value) {
    // Clean the array only if the switch was clicked.
    // Allows the switch to be turned on and off automatically from user actions.
    if (!auto_switch) {
      group.value.clear();
    }
  } else {
    if (!auto_switch) {
      group.value.addAllItems();
    }
  }
  emit("update:modelValue", group.value.value);
}

/**
 * Update the checkbox value when a checkbox is clicked.
 * @param {boolean} value - The new value of the checkbox.
 * @param {CheckboxField} checkbox - The checkbox being updated.
 */
function updatedCheckbox(value: any, checkbox: CheckboxField) {
  const hasCheckbox: CheckboxGroupValue | undefined = group.value.find(checkbox);
  if (!value && !isEmpty(hasCheckbox)) {
    group.value.removeItem(hasCheckbox as CheckboxGroupValue);
    // If the switch is turned on and an item is removed, update the switch with auto switch.
    if (!isEmpty(group.value.switch) && group.value.switch?.value) {
      group.value.switch!.value = false;
      updatedSwitch(false, true);
    }
  } else {
    if (isEmpty(hasCheckbox)) {
      group.value.addItem(checkbox.name, checkbox.value);
      // Check if all items are added.
      if (!isEmpty(group.value.switch) && group.value.value.length === group.value.items.length) {
        group.value.switch!.value = true;
        updatedSwitch(true, true);
      }
    }
  }
  emit("update:modelValue", group.value.value);
}
</script>

<template>
  <VCard elevation="0">
    <VCardTitle>
      <!-- Display the label of the checkbox group -->
      {{ group.label }}
      <VSwitch
        v-if="has_switch"
        v-model="group!.switch!.value"
        v-bind="group!.switch!.props()"
        @update:modelValue="updatedSwitch"
      />
    </VCardTitle>
    <VCardText>
      <VRow>
        <!-- Loop through each checkbox item in the group -->
        <VCol v-for="(item, index) in group.items" :key="index" :cols="12" :md="item.cols">
          <!-- Display a checkbox for each item -->
          <VCheckbox
            v-model="group.items[index].value"
            v-bind="item.props()"
            @update:modelValue="updatedCheckbox($event, item)"
          ></VCheckbox>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
