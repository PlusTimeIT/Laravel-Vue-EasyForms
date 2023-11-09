<script setup lang="ts">
import { computed, ref } from "vue";
import { Alert } from "../../classes/elements";
import { EasyIcon } from ".";
import { isEmpty } from "../../utils";

const xProps = defineProps<{
  alerts: Alert[];
}>();

const alerts = ref<Alert[]>(xProps.alerts);
const visible_alerts = computed<Alert[]>(() => alerts?.value?.filter((alert) => alert.display));

function has_append_icon(alert: Alert) {
  return !isEmpty(alert?.append_icon) && !isEmpty(alert?.append_icon?.icon);
}

function has_prepend_icon(alert: Alert) {
  return !isEmpty(alert?.prepend_icon) && !isEmpty(alert?.prepend_icon?.icon);
}
</script>

<template>
  <v-col v-for="(alert, index) in alerts" :key="index" :cols="alert.cols" v-show="alert.display">
    <v-alert v-model="alert.display" v-bind="alert.props()">
      <template #prepend v-if="has_prepend_icon(alert)">
        <easy-icon :icon="alert?.prepend_icon" />
      </template>
      <template #append v-if="has_append_icon(alert)">
        <easy-icon :icon="alert?.append_icon" />
      </template>
      <div v-html="alert.text"></div>
    </v-alert>
  </v-col>
</template>
