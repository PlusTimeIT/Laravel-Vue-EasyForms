<script setup lang="ts">
import { onMounted, computed, ref, watch, onBeforeUnmount } from "vue";
import { TextField } from "../../classes/fields";
import type { FieldType } from "../../types";
import EasyInput from "./EasyInput.vue";
import { PasswordRequirementsDialog } from "../elements";
// Define the component's props interface
interface Props {
  fields: FieldType[];
  lowerCase?: boolean;
  minLength?: boolean | number;
  numbers?: boolean;
  special?: boolean;
  upperCase?: boolean;
  modelValue: string | undefined;
  showRequirementsDialog?: boolean;
  showStrengthBar?: boolean;
  strengthErrorColor?: string;
  strengthErrorText?: string;
  strengthSuccessColor?: string;
  strengthSuccessText?: string;
  strengthWarningColor?: string;
  strengthWarningText?: string;
  errorMessages?: string[] | undefined;
  textfield: TextField;
  viewMode?: boolean;
}

// Define props with default values
const xProps = withDefaults(defineProps<Props>(), {
  modelValue: "",
  showStrengthBar: false,
  viewMode: false,
  showRequirementsDialog: false,
  strengthErrorColor: "error",
  strengthWarningColor: "warning",
  strengthSuccessColor: "success",
  strengthErrorText: "weak",
  strengthWarningText: "medium",
  strengthSuccessText: "strong",
  errorMessages: () => [],
  lowerCase: true,
  upperCase: true,
  numbers: true,
  special: true,
  minLength: 8,
});

// Define the emit function for custom events
const emit = defineEmits<{
  (e: "validated", value: string | undefined): void;
  (e: "invalidated", value: string | undefined): void;
  (e: "update:modelValue", value: any | undefined): void;
  (e: "click:prepend", value: any): void;
  (e: "click:prependInner", value: any): void;
  (e: "click:append", value: any): void;
  (e: "click:appendInner", value: any): void;
}>();

// Create a reference to the TextField object
const rTextfield = ref<TextField>(xProps.textfield);
const rModelValue = ref<string>(xProps.modelValue);
const dialog = ref<boolean>(false);
const errorMessages = ref<string[]>(xProps.errorMessages);

// Compute the percentage of passed password strength requirements
const passed_percentage = computed<number>(() => {
  if (password_strength.value === 0 || requirement_ratio.value === 0) return 0;
  const total_passed = password_strength.value / requirement_ratio.value;
  return (total_passed / total_requirements.value) * 100;
});

// Compute the requirement ratio
const requirement_ratio = computed<number>(() => 100 / total_requirements.value);

// Compute the total number of active requirements
const total_requirements = computed<number>(() => {
  let total_active_requirements = 0;
  if (xProps.lowerCase) {
    total_active_requirements++;
  }
  if (xProps.upperCase) {
    total_active_requirements++;
  }
  if (xProps.numbers) {
    total_active_requirements++;
  }
  if (xProps.special) {
    total_active_requirements++;
  }
  if (xProps.minLength) {
    total_active_requirements++;
  }
  return total_active_requirements;
});

// Compute the password strength score
const password_strength = computed<number>(() => {
  let strength = 0;
  if (xProps.lowerCase) {
    if (rTextfield.value?.value?.match(/[a-z]+/)) {
      strength += 1;
    }
  }
  if (xProps.upperCase) {
    if (rTextfield.value?.value?.match(/[A-Z]+/)) {
      strength += 1;
    }
  }
  if (xProps.numbers) {
    if (rTextfield.value?.value?.match(/[0-9]+/)) {
      strength += 1;
    }
  }
  if (xProps.special) {
    if (rTextfield.value?.value?.match(/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]+/)) {
      strength += 1;
    }
  }
  if (xProps.minLength) {
    if (rTextfield.value?.value?.length >= xProps.minLength) {
      strength += 1;
    }
  }

  // Calculate the actual strength score
  return Math.ceil(requirement_ratio.value * strength);
});

// Compute the color for the password strength bar
const strength_color = computed<string>(() => {
  if (passed_percentage.value > 75) {
    return xProps.strengthSuccessColor;
  } else if (passed_percentage.value > 50) {
    return xProps.strengthWarningColor;
  }
  return xProps.strengthErrorColor;
});

// Compute the text for the password strength indicator
const strength_text = computed<string>(() => {
  if (passed_percentage.value > 75) {
    return xProps.strengthSuccessText;
  } else if (passed_percentage.value > 50) {
    return xProps.strengthWarningText;
  }
  return xProps.strengthErrorText;
});

const textfieldWatcher = watch(rTextfield.value, () => {
  updated();
});

const modelValueWatcher = watch(rModelValue, (update) => {
  rTextfield.value.value = update;
});

const errorMessagesWatcher = watch(errorMessages.value, (messages) => {
  rTextfield.value.error_messages = messages;
});

onBeforeUnmount(() => {
  textfieldWatcher();
  modelValueWatcher();
  errorMessagesWatcher();
});

// Update the model value when the input is updated
function updated() {
  emit("update:modelValue", rTextfield.value.value);
}

// Validate the input field
function validate() {
  rTextfield.value.validate();
  emit("validated", rTextfield.value.name);
}

// Invalidate the input field
function invalidate() {
  rTextfield.value.invalidate();
  emit("invalidated", rTextfield.value.name);
}

// Handle inner icon clicks (toggle password visibility)
function innerClick(event: any, type: "prepend" | "append") {
  if (xProps.viewMode) {
    // Toggle password visibility for inner icons in view mode
    if (rTextfield.value.value!.value!.type == "password") {
      rTextfield.value.value!.value!.type = "text";
      if (type == "prepend") {
        emit("click:prependInner", event);
        rTextfield.value.value!.value!.prepend_inner_icon!.icon = "mdi-eye-off";
      }
      if (type == "append") {
        emit("click:appendInner", event);
        rTextfield.value.value!.value!.append_inner_icon!.icon = "mdi-eye-off";
      }
    } else {
      rTextfield.value.type = "password";
      if (type == "prepend") {
        emit("click:prependInner", event);
        rTextfield.value.value!.value!.prepend_inner_icon!.icon = "mdi-eye";
      }
      if (type == "append") {
        emit("click:appendInner", event);
        rTextfield.value.value!.value!.append_inner_icon!.icon = "mdi-eye";
      }
    }
  }
}

// Set the initial value and loading state of the textfield on mount
onMounted(() => {
  rTextfield.value.value = xProps.modelValue;
  rTextfield.value?.isLoading(false);
});

function dialogClick() {
  dialog.value = true;
}
</script>

<template>
  <VRow>
    <VCol :cols="12">
      <!-- Render EasyInput component with provided props -->
      <EasyInput
        v-model:field="rTextfield"
        v-bind="rTextfield?.props()"
        :fields="xProps.fields ?? []"
        @updated="updated"
        @validated="validate"
        @invalidated="invalidate"
        @click:prependInner="innerClick($event, 'prepend')"
        @click:appendInner="innerClick($event, 'append')"
        @click:prepend="emit('click:prepend', $event)"
        @click:append="emit('click:append', $event)"
      />
    </VCol>
    <VCol :cols="12" v-if="xProps.showStrengthBar">
      <VRow>
        <VCol cols="12" style="position: relative">
          <!-- Display password strength bar if showStrengthBar is true -->
          <VProgressLinear v-model="password_strength" striped :color="strength_color" height="30">
            <template #default>
              <strong :class="'text-' + strength_color + '-lighten-2'"
                >{{ strength_text }} - {{ passed_percentage }}%</strong
              >
            </template>
          </VProgressLinear>
          <VTooltip>
            <template #activator="{ props }">
              <VBtn
                icon="mdi-information-slab-circle-outline"
                v-bind="props"
                density="compact"
                style="position: absolute; right: 0px; top: 0px"
                v-if="xProps.showRequirementsDialog"
                @click="dialogClick"
              >
              </VBtn>
            </template>
            <span>Click for password requirements</span>
          </VTooltip>
        </VCol>
      </VRow>
    </VCol>
    <PasswordRequirementsDialog
      v-if="xProps.showRequirementsDialog"
      v-model="dialog"
      :lower-case="xProps.lowerCase"
      :upper-case="xProps.upperCase"
      :numbers="xProps.numbers"
      :special="xProps.special"
      :min-length="xProps.minLength"
    />
  </VRow>
</template>
