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
  <v-col cols="auto" :class="loader?.progress?.classes ?? ''">
    <v-progress-circular
      v-if="loader?.type === FormLoaderTypes.Circular"
      v-bind="loader?.progress?.props()"
    ></v-progress-circular>
    <v-progress-linear
      v-if="loader?.type === FormLoaderTypes.Linear"
      v-bind="loader?.progress?.props()"
    ></v-progress-linear>
  </v-col>
</template>
