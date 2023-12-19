<script setup lang="ts">
import { ref } from "vue";
import { FormLoaderTypes } from "../../enums";
import { FormLoader } from "../../classes/properties";

const xProps = defineProps<{
  loader: FormLoader;
}>();

const loader = ref<FormLoader>(xProps.loader);
</script>

<template>
  <VCol cols="auto" :class="loader?.progress?.classes ?? ''">
    <VProgressCircular
      v-if="loader?.type === FormLoaderTypes.Circular"
      v-bind="loader?.progress?.props()"
    ></VProgressCircular>
    <VProgressLinear
      v-if="loader?.type === FormLoaderTypes.Linear"
      v-bind="loader?.progress?.props()"
    ></VProgressLinear>
  </VCol>
</template>
