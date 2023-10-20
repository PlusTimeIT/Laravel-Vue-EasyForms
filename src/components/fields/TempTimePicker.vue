<template>
  <v-sheet v-click-outside="clickOutside" class="v-picker v-picker--with-actions" :width="props.width">
    <v-picker-title>
      {{ props.title }}
    </v-picker-title>
    <div class="v-picker__header"></div>
    <div class="v-picker__body">
      <v-row justify="center">
        <v-col cols="3">
          <!-- Hour input field -->
          <v-text-field
            v-model="hours"
            type="number"
            :min="hour_min"
            :max="hour_max"
            v-maska:[masking_options]
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <span class="text-h3">:</span>
        </v-col>
        <v-col cols="3">
          <!-- Minute input field -->
          <v-text-field
            v-model="minutes"
            type="number"
            :min="minute_min"
            :max="minute_max"
            v-maska:[masking_options]
          ></v-text-field>
        </v-col>
        <v-col v-if="show_am_pm" cols="4">
          <!-- AM/PM selection dropdown -->
          <v-select v-model="am_or_pm" :items="time_items"></v-select>
        </v-col>
      </v-row>
    </div>
    <div class="v-picker__actions">
      <div>
        <!-- Cancel button -->
        <v-btn :elevation="0" variant="flat" @click="cancel">
          {{ props.cancelText }}
        </v-btn>
        <!-- Save button -->
        <v-btn :elevation="0" variant="flat" @click="save">
          {{ props.okText }}
        </v-btn>
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { Ref, ref, onMounted, watch, ComputedRef, computed } from "vue";
import { TimePickerModeTypes } from "../../enums";
import { isEmpty } from "../../composables/utils/Types";
import { Masking } from "../../types/Masking";

// Define the component's props interface
interface Props {
  modelValue: string | undefined;
  padStart: boolean;
  mode: TimePickerModeTypes;
  rollingNumbers: boolean;
  width?: string | number | undefined;
  cancelText?: string | undefined;
  okText?: string | undefined;
  title?: string | undefined;
  closeOnOutsideClick?: boolean | undefined;
}

const time_items: string[] = ["AM", "PM"];

// Define props with default values
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  padStart: true,
  rollingNumbers: true,
  mode: TimePickerModeTypes.Normal,
  width: 360,
  cancelText: "cancel",
  okText: "ok",
  title: "select time",
  closeOnOutsideClick: true,
});

// Define the emit function for custom events
const emit = defineEmits<{
  (e: "update:modelValue", value: any | undefined): void;
  (e: "click:cancel", value: string | undefined): void;
  (e: "click:save", value: string | undefined): void;
}>();

// Define masking options for input fields
const masking_options: Ref<Masking> = ref({
  mask: "##",
  eager: true,
}) as Ref<Masking>;

// Create references for hours, minutes, and AM/PM selection
const hours: Ref<string | number> = ref("10");
const minutes: Ref<string | number> = ref("00");
const am_or_pm: Ref<string> = ref("AM");

// Compute whether to show the AM/PM selection dropdown
const show_am_pm: ComputedRef<boolean> = computed(() => {
  return props.mode == TimePickerModeTypes.Normal;
});

// Computed min and max values for hour and minute input fields
const hour_min: ComputedRef<number> = computed(() => {
  return props.rollingNumbers ? -1 : 0;
});

const hour_max: ComputedRef<number> = computed(() => {
  if (props.rollingNumbers) {
    return props.mode == TimePickerModeTypes.Normal ? 13 : 24;
  }
  return props.mode == TimePickerModeTypes.Normal ? 12 : 23;
});

const minute_min: ComputedRef<number> = computed(() => {
  return props.rollingNumbers ? -1 : 0;
});

const minute_max: ComputedRef<number> = computed(() => {
  if (props.rollingNumbers) {
    return 60;
  }
  return 59;
});

// Computed time value to display
const time: ComputedRef<string> = computed(() => {
  return show_am_pm.value
    ? hours.value + ":" + minutes.value + " " + am_or_pm.value
    : hours.value + ":" + minutes.value;
});

// Handle save action (emit event)
function save() {
  emit("update:modelValue", time.value);
  emit("click:save", time.value);
}

// Handle cancel action (emit event)
function cancel() {
  emit("click:cancel", undefined);
}

// Handle value updates (emit event)
function updated() {
  emit("update:modelValue", time.value);
}

// Handle click outside event (close the menu)
function clickOutside() {
  if (props.closeOnOutsideClick) {
    cancel();
  }
}

// Watch for changes in AM/PM selection
watch(am_or_pm, () => {
  updated();
});

// Watch for changes in hours
watch(hours, (value) => {
  if (props.mode == TimePickerModeTypes.Normal) {
    if (props.rollingNumbers) {
      if ((value as number) <= 0) {
        hours.value = 12;
      } else if ((value as number) > 12) {
        hours.value = 1;
      }
    } else {
      if ((value as number) <= 0) {
        hours.value = 0;
      } else if ((value as number) > 12) {
        hours.value = 12;
      }
    }
  }

  if (props.mode == TimePickerModeTypes.Military) {
    if (props.rollingNumbers) {
      if ((value as number) < 0) {
        hours.value = 23;
      } else if ((value as number) > 23) {
        hours.value = 0;
      }
    } else {
      if ((value as number) < 0) {
        hours.value = 0;
      } else if ((value as number) > 23) {
        hours.value = 23;
      }
    }
  }
  if ((hours.value as number) < 10 && props.padStart) {
    hours.value = hours.value.toString().padStart(2, "0");
  }

  updated();
});

// Watch for changes in minutes
watch(minutes, (value) => {
  if (props.rollingNumbers) {
    if ((value as number) < 0) {
      minutes.value = 59;
    }

    if ((value as number) > 59) {
      minutes.value = 0;
    }
  }

  if ((minutes.value as number) < 10 && props.padStart) {
    minutes.value = minutes.value.toString().padStart(2, "0");
  }

  updated();
});

// Initialize values on mount based on the modelValue
onMounted(() => {
  // check if value has a time and set.
  if (!isEmpty(props.modelValue)) {
    if (props.mode == TimePickerModeTypes.Normal) {
      // check if AM or PM.
      const split = props.modelValue.split(" ");
      const allowedValues = ["am", "pm"];
      if (allowedValues.includes(split[1].toLowerCase())) {
        am_or_pm.value = split[1].toUpperCase();
      }
      const time = split[0].split(":");
      hours.value = time[0];
      minutes.value = time[1];
    }
    if (props.mode == TimePickerModeTypes.Military) {
      // check if AM or PM.
      const time = props.modelValue.split(":");
      hours.value = time[0];
      minutes.value = time[1];
    }
  }
});
</script>
