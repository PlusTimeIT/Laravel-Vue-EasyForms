<template>
  <v-card elevation="0">
    <v-card-title :class="{ 'error--text': showErrors }">
      {{ loadedLabel }}
      <v-switch
        v-if="loadedSwitch.display"
        class="ml-auto"
        v-model="selectAll"
        :label="loadedSwitch.label"
        :color="loadedSwitch.color"
        :value="loadedSwitch.value"
        :dense="loadedSwitch.dense"
      ></v-switch>
    </v-card-title>
    <v-card-text>
      <v-row v-if="showErrors">
        <v-col
          v-for="(error, index) in loadedErrorMessages"
          :key="index"
          :cols="12"
          class="error--text"
        >
          {{ error }}
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, index) in loadedItems"
          :key="index"
          :cols="12"
          :md="item.cols"
        >
          <v-checkbox
            v-model="selectedItems"
            multiple
            :label="item.label"
            :value="item.value"
            :color="item.color"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LvefCheckboxGroup",
  props: {
    cols: {
      Type: String,
      default: "6"
    },
    label: {
      type: String,
      default: ""
    },
    offset: {
      Type: String,
      default: ""
    },
    items: {
      Type: Array,
      default: () => []
    },
    value: {
      default: () => []
    },
    errorMessages: {
      type: Array,
      default: () => []
    },
    switch: {
      default: () => ({
        display: false,
        label: "Select All / Deselect All",
        color: "primary",
        value: false,
        dense: false
      })
    }
  },
  data: () => ({
    selectedItems: [],
    selectAll: false
  }),
  created() {
    this.selectedItems = this.value;
  },
  watch: {
    selectAll: function(update) {
      if (!update) {
        // remove all selected.
        this.selectedItems = [];
      } else {
        // add all
        this.selectedItems = [...this.loadedItems.map(item => item.value)];
      }
    },
    selectedItems: {
      handler: function(val) {
        this.$emit("field_update", val);
      },
      deep: true
    }
  },
  computed: {
    showErrors: function() {
      return this.loadedErrorMessages.length > 0;
    },
    loadedErrorMessages: function() {
      return this.errorMessages;
    },
    loadedSwitch: function() {
      return this.switch;
    },
    loadedItems: function() {
      return this.items;
    },
    loadedLabel: function() {
      return this.label;
    }
  }
};
</script>
