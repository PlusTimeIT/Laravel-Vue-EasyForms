<script setup lang="ts">
import { onMounted, computed, ref, watch } from "vue";
import { TextField } from "../../classes/fields";
import type { FieldType } from "../../types";
import EasyInput from "./EasyInput.vue";

// Define the component's props interface
interface Props {
  fields: FieldType[];
  lowerCase?: boolean;
  minLength?: boolean | number;
  numbers?: boolean;
  special?: boolean;
  upperCase?: boolean;
  modelValue: string | undefined;
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
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  showStrengthBar: false,
  viewMode: false,
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
const textfield = ref<TextField>(props.textfield);
const modelValue = ref<string>(props.modelValue);
const errorMessages = ref<string[]>(props.errorMessages);

// Compute the percentage of passed password strength requirements
const passed_percentage = computed<number>(() => {
  if (password_strength.value === 0 || requirement_ratio.value === 0) return 0;
  const total_passed = password_strength.value / requirement_ratio.value;
  return (total_passed / total_requirements.value) * 100;
});

// Compute the requirement ratio
const requirement_ratio = computed<number>(() => {
  return 100 / total_requirements.value;
});

// Compute the total number of active requirements
const total_requirements = computed<number>(() => {
  let total_active_requirements = 0;
  if (props.lowerCase) {
    total_active_requirements++;
  }
  if (props.upperCase) {
    total_active_requirements++;
  }
  if (props.numbers) {
    total_active_requirements++;
  }
  if (props.special) {
    total_active_requirements++;
  }
  if (props.minLength) {
    total_active_requirements++;
  }
  return total_active_requirements;
});

// Compute the password strength score
const password_strength = computed<number>(() => {
  let strength = 0;
  if (props.lowerCase) {
    if (textfield?.value?.value?.match(/[a-z]+/)) {
      strength += 1;
    }
  }
  if (props.upperCase) {
    if (textfield?.value?.value?.match(/[A-Z]+/)) {
      strength += 1;
    }
  }
  if (props.numbers) {
    if (textfield?.value?.value?.match(/[0-9]+/)) {
      strength += 1;
    }
  }
  if (props.special) {
    if (textfield?.value?.value?.match(/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]+/)) {
      strength += 1;
    }
  }
  if (props.minLength) {
    if (textfield?.value?.value?.length >= props.minLength) {
      strength += 1;
    }
  }

  // Calculate the actual strength score
  return Math.ceil(requirement_ratio.value * strength);
});

// Compute the color for the password strength bar
const strength_color = computed<string>(() => {
  if (passed_percentage.value > 75) {
    return props.strengthSuccessColor;
  } else if (passed_percentage.value > 50) {
    return props.strengthWarningColor;
  }
  return props.strengthErrorColor;
});

// Compute the text for the password strength indicator
const strength_text = computed<string>(() => {
  if (passed_percentage.value > 75) {
    return props.strengthSuccessText;
  } else if (passed_percentage.value > 50) {
    return props.strengthWarningText;
  }
  return props.strengthErrorText;
});
// Watch for changes in the picker value
watch(textfield.value, () => {
  updated();
});
// Watch for changes in the picker value
watch(modelValue, (update) => {
  textfield.value.value = update;
});

watch(errorMessages.value, (messages) => {
  textfield.value.error_messages = messages;
});

// Update the model value when the input is updated
function updated() {
  emit("update:modelValue", textfield.value.value);
}

// Validate the input field
function validate() {
  textfield.value.validate();
  emit("validated", textfield.value.name);
}

// Invalidate the input field
function invalidate() {
  textfield.value.invalidate();
  emit("invalidated", textfield.value.name);
}

// Handle inner icon clicks (toggle password visibility)
function innerClick(event: any, type: "prepend" | "append") {
  if (props.viewMode) {
    // Toggle password visibility for inner icons in view mode
    if (textfield.value.value!.value!.type == "password") {
      textfield.value.value!.value!.type = "text";
      if (type == "prepend") {
        emit("click:prependInner", event);
        textfield.value.value!.value!.prepend_inner_icon!.icon = "mdi-eye-off";
      }
      if (type == "append") {
        emit("click:appendInner", event);
        textfield.value.value!.value!.append_inner_icon!.icon = "mdi-eye-off";
      }
    } else {
      textfield.value.type = "password";
      if (type == "prepend") {
        emit("click:prependInner", event);
        textfield.value.value!.value!.prepend_inner_icon!.icon = "mdi-eye";
      }
      if (type == "append") {
        emit("click:appendInner", event);
        textfield.value.value!.value!.append_inner_icon!.icon = "mdi-eye";
      }
    }
  }
}

// Set the initial value and loading state of the textfield on mount
onMounted(() => {
  textfield.value!.value = props.modelValue;
  textfield.value?.isLoading(false);
});
</script>

<template>
  <v-row>
    <v-col :cols="12">
      <!-- Render EasyInput component with provided props -->
      <easy-input
        v-model:field="textfield"
        v-bind="textfield?.props()"
        :fields="props.fields ?? []"
        @updated="updated"
        @validated="validate"
        @invalidated="invalidate"
        @click:prependInner="innerClick($event, 'prepend')"
        @click:appendInner="innerClick($event, 'append')"
        @click:prepend="emit('click:prepend', $event)"
        @click:append="emit('click:append', $event)"
      />
      <!-- Display password strength bar if showStrengthBar is true -->
      <v-progress-linear v-if="props.showStrengthBar" v-model="password_strength" :color="strength_color" height="25">
        <template #default>
          <strong>{{ strength_text }}</strong>
        </template>
      </v-progress-linear>
    </v-col>
  </v-row>
</template>
