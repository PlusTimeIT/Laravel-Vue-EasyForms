<template>
  <v-col :cols="cols" :offset="offset" class="pt-0 pb-0">
    <validation-provider
      v-slot="{ errors }"
      :name="field_data.validation"
      tag="div"
    >
      <component
        :is="field_data.rules.component"
        v-model="field_data.rules.value"
        v-bind="prepare_props(errors)"
      >
        <p class="mb-3 mt-4" v-if="field_data.rules.component == 'h2'">
          {{ field_data.rules.value }}
        </p>

        <v-tooltip v-if="field_data.rules.help !== ''" slot="append" bottom>
          <template #activator="{ on }">
            <v-icon slot="activator" color="primary" dark v-on="on"
              >mdi-help-box</v-icon
            >
          </template>
          <span>{{ field_data.rules.help }} </span>
        </v-tooltip>
      </component>
    </validation-provider>
  </v-col>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  $validates: true,
  components: {
    ValidationProvider
  },
  props: {
    form_field: {
      type: Object,
      default: () => ({})
    },
    cols: {
      Type: String,
      default: "6"
    },
    additional_form_data: {
      type: Object,
      default: () => ({})
    },
    offset: {
      Type: String,
      default: ""
    }
  },
  watch: {
    field_data: {
      handler: function(val) {
        this.$emit("update", val.rules.value);
        this.$emit("field_update", val);
      },
      deep: true
    }
  },
  data: () => ({
    password: false,
    confirm_password: false,
    menu: false,
    dates: [],
    field_data: {}
  }),
  created() {
    this.field_data = this.form_field;
  },
  computed: {
    additional_form: function() {
      return this.additional_form_data;
    }
  },
  methods: {
    prepare_props(errors) {
      let result = {};
      result["error-messages"] = errors;
      result["label"] = this.prepare_label();
      result["outlined"] = true;
      result["dense"] = true;

      if (
        !this.is_undefined(this.field_data.rules.help) &&
        this.field_data.rules.help !== ""
      ) {
        //result['prepend-inner-icon'] = this.field_data.rules.value;
      }

      if (
        !this.is_undefined(this.field_data.type) &&
        this.field_data.type == "time"
      ) {
        result["populate"] = this.field_data.rules.value;
        result["ampm_in_title"] = true;
        result["no_title"] = false;
        result["class"] = "mt-2";
      }

      if (
        !this.is_undefined(this.field_data.type) &&
        this.field_data.type == "file-input"
      ) {
        result["show-size"] = true;
        result["accept"] = this.field_data.rules.accept;
      }

      if (
        !this.is_undefined(this.field_data.type) &&
        (this.field_data.type == "select" ||
          this.field_data.type == "customer-select" ||
          this.field_data.type == "facility-select" ||
          this.field_data.type == "zone-select" ||
          this.field_data.type == "service-select")
      ) {
        result["selected"] =
          !this.is_undefined(this.field_data.rules.integer) &&
          this.field_data.rules.integer
            ? parseInt(this.field_data.rules.value)
            : this.field_data.rules.value;
        result["any_field"] = !this.is_undefined(
          this.field_data.rules.any_field
        )
          ? this.field_data.rules.any_field
          : false;
        result["items"] = this.field_data.rules.items;
        result["item-text"] = this.field_data.rules.item_text;
        result["item-value"] = this.field_data.rules.item_value;
        result["data-vv-name"] = "select";
        result["chips"] = true;
      }
      if (
        !this.is_undefined(this.field_data.type) &&
        this.field_data.type == "hidden"
      ) {
        result["class"] = "hidden-input";
      }

      if (
        !this.is_undefined(this.field_data.rules.component_type) &&
        this.field_data.rules.component_type == "password"
      ) {
        result["type"] = this.field_data.rules.component_type;
      }

      if (
        !this.is_undefined(this.field_data.rules.component) &&
        this.field_data.rules.component == "date-picker"
      ) {
        result["close-on-content-click"] = false;
        result["controls"] = false;
        if (!this.is_undefined(this.field_data.rules.close_on_content_click))
          result[
            "close-on-content-click"
          ] = this.field_data.rules.close_on_content_click;

        if (!this.is_undefined(this.field_data.rules.controls))
          result["controls"] = this.field_data.rules.controls;
      }

      if (!this.is_undefined(this.field_data.rules.step)) {
        result["step"] = this.field_data.rules.step;
      }

      if (!this.is_undefined(this.field_data.rules.component_type)) {
        result["type"] = this.field_data.rules.component_type;
      }

      if (!this.is_undefined(this.field_data.rules.min)) {
        result["min"] = this.field_data.rules.min;
      }

      if (!this.is_undefined(this.field_data.rules.max)) {
        result["max"] = this.field_data.rules.max;
      }

      if (!this.is_undefined(this.field_data.rules.placeholder)) {
        result["placeholder"] = this.field_data.rules.placeholder;
      }

      if (!this.is_undefined(this.field_data.rules.readonly)) {
        result["readonly"] = this.field_data.rules.readonly;
      }

      if (!this.is_undefined(this.field_data.rules.multiple)) {
        result["multiple"] = this.field_data.rules.multiple;
      }

      if (!this.is_undefined(this.additional_form_data)) {
        result["additional_form_data"] = this.additional_form;
      }

      if (this.field_data.rules.component == "h2") {
        result = { "v-html": this.field_data.rules.value };
      }

      return result;
    },
    prepare_label() {
      let label = !this.is_undefined(this.field_data.rules.label)
        ? this.field_data.rules.label
        : this.field_data.validation;
      if (
        !this.is_undefined(this.field_data.rules.required) &&
        this.field_data.rules.required
      ) {
        label += " ( * required )";
      } else {
        label += " ( optional )";
      }
      if (
        !this.is_undefined(this.field_data.rules.readonly) &&
        this.field_data.rules.readonly
      ) {
        label = this.field_data.rules.label + " ( readonly )";
      }
      return label;
    }
  }
};
</script>

<style>
.v-select__selections {
  margin-top: 3px !important;
  margin-bottom: 2px !important;
}
.v-select.v-input--dense .v-chip {
  margin-bottom: 2px !important;
}
</style>
