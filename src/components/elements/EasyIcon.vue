<script setup lang="ts">
import { ref } from "vue";
import { isEmpty } from "../../composables/utils";
import { Icon } from "../../classes/elements";

interface Props {
  icon: Icon | undefined;
  identifier?: string | number;
}
const xProps = withDefaults(defineProps<Props>(), {
  identifier: "",
});

const emit = defineEmits<{
  (e: "click", value: string | number | undefined): void;
}>();

const icon = ref<Icon>(xProps.icon);

function click() {
  if (!isEmpty(xProps?.identifier)) {
    emit("click", xProps?.identifier);
  } else {
    emit("click", "");
  }
}
</script>
<template>
  <v-tooltip v-bind="icon?.tooltip?.props()" :disabled="icon?.tooltip?.disabled ?? true">
    <template #activator="{ props }">
      <v-icon v-bind="{ ...props, ...icon?.props() }" @click="click" :class="icon.classes">
        {{ icon?.icon }}
      </v-icon>
    </template>
    <span>{{ icon?.tooltip?.text }}</span>
  </v-tooltip>
</template>
