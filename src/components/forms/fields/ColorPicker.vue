<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="closeOnContentClick"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="selectedColor"
        persistent-hint
        readonly
        v-on="on"
        :error-messages="loadedErrorMessages"
        outlined
        dense
        :label="label"
      ></v-text-field>
    </template>
    <v-color-picker v-model="dates" :range="multiple" no-title scrollable dark>
    </v-color-picker>
  </v-menu>
</template>

<script>
import moment from "moment-timezone";
import { FormMixin } from "../mixins/FormMixins";

export default {
  mixins: [FormMixin],
  name: "ColorPicker",
  props: {
    value: {
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    errorMessages: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    closeOnContentClick: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    selectedColor: "",
    datesFormatted: "",
    menu: false
  }),
  mounted() {
    this.selectedColor = this.value;
  },
  computed: {
    loadedErrorMessages() {
      return this.errorMessages;
    }
  },
  watch: {
    selectedColor() {
      this.$emit("input", this.selectedColor);
    }
  },

  methods: {
    formatPickerDate(date, locale = "en-au") {
      if (!this.isArray(date)) {
        const today = moment(date);
        today.locale(locale);
        return today.format("L");
      }
      const addedDates = [];
      if (date.length == 0) {
        return [];
      }

      date.forEach(dates => {
        const newDate = moment(dates);
        newDate.locale(locale);
        addedDates.push(newDate.format("L"));
      });

      return addedDates;
    }
  }
};
</script>
