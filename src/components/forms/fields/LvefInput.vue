<template>
  <v-col :cols="cols" :offset="offset" class="pt-0 pb-0" v-if="displayCol()">
    <validation-provider
      v-slot="{ errors }"
      :name="fieldData.name"
      tag="div"
      :rules="prepareRules()"
    >
        <template v-if="getMasking() === null">
            <component
                :is="fieldData.component"
                v-model="fieldData.value"
                v-bind="prepareProps(errors)"
                @field_update="customFieldUpdate"
            >
                <div v-if="fieldData.component == 'v-radio-group'">
                <v-radio
                    v-for="(item, index) in fieldData.items"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :color="item.color"
                ></v-radio>
                </div>
                
                <p class="mb-3 mt-4" v-if="fieldData.component == 'h2'">
                {{ fieldData.value }}
                </p>
                <v-tooltip v-if="fieldData.help !== ''" slot="append" bottom>
                <template #activator="{ on }">
                    <v-icon slot="activator" color="primary" dark v-on="on">
                    mdi-help-box
                    </v-icon>
                </template>
                <span>{{ fieldData.help }} </span>
                </v-tooltip>
                <template
                v-if="!isUndefined(fieldData.counter) && fieldData.counter"
                v-slot:counter="{ props }"
                >
                <v-counter
                    v-bind="props"
                    :value="fieldValueLength(fieldData.value)"
                ></v-counter>
                </template>
            </component>
        </template>
        <template v-else>
            <component
                :is="fieldData.component"
                v-model="fieldData.value"
                v-mask="getMasking"
                v-bind="prepareProps(errors)"
            >
                <div v-if="fieldData.component == 'v-radio-group'">
                <v-radio
                    v-for="(item, index) in fieldData.items"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :color="item.color"
                ></v-radio>
                </div>
                <p class="mb-3 mt-4" v-if="fieldData.component == 'h2'">
                {{ fieldData.value }}
                </p>
                <v-tooltip v-if="fieldData.help !== ''" slot="append" bottom>
                <template #activator="{ on }">
                    <v-icon slot="activator" color="primary" dark v-on="on">
                    mdi-help-box
                    </v-icon>
                </template>
                <span>{{ fieldData.help }} </span>
                </v-tooltip>
                <template
                v-if="!isUndefined(fieldData.counter) && fieldData.counter"
                v-slot:counter="{ props }"
                >
                <v-counter
                    v-bind="props"
                    :value="fieldValueLength(fieldData.value)"
                ></v-counter>
                </template>
            </component>
            
        </template>

      
        
    </validation-provider>
  </v-col>
</template>

<script>
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { FormMixin } from "/src/components/forms/mixins/FormMixins";
import DatePicker from "/src/components/forms/fields/DatePicker.vue";
import TimePicker from "/src/components/forms/fields/TimePicker.vue";
import LvefCheckboxGroup from "./LvefCheckboxGroup.vue";

import { 
    VAutoComplete, 
    VCheckbox, 
    VCombobox,
    VFileInput,
    VInput,
    VOtpInput,
    VOverflowBtn,
    VRadio,
    VSlider,
    VSelect,
    VSwitch,
    VTextarea,
    VTextField
} from 'vuetify/lib'

export default {
  name: "LvefInput",
  $validates: true,
  mixins: [FormMixin],
  components: {
    LvefCheckboxGroup,
    ValidationProvider,
    DatePicker,
    TimePicker,
    VAutoComplete, 
    VCheckbox, 
    VCombobox,
    VFileInput,
    VInput,
    VOtpInput,
    VOverflowBtn,
    VRadio,
    VSlider,
    VSelect,
    VSwitch,
    VTextarea,
    VTextField,
  },
  props: {
    cols: {
      Type: String,
      default: "6"
    },
    offset: {
      Type: String,
      default: ""
    },
    value: {
      default: ""
    }
  },
  watch: {
    fieldData: {
      handler: function(val) {
        this.$emit("field_update", val);
      },
      deep: true
    }
  },
  data: () => ({
    fieldLoaded: false,
    fieldData: {}
  }),
  created() {
    this.fieldData = this.value;
    if (this.fieldData.dependsOn !== null) {
      this.fieldLoaded = true;
    } else {
      this.fieldLoaded = true;
    }
  },
  computed: {
    form: function() {
      return this.$parent.form;
    },
    displayLabel() {
      let label = !this.isUndefined(this.fieldData.label)
        ? this.fieldData.label
        : this.fieldData.name;
      if (
        !this.isUndefined(this.fieldData.required) &&
        this.fieldData.required
      ) {
        label += " ( * required )";
      } else if (
        !this.isUndefined(this.fieldData.readonly) &&
        this.fieldData.readonly
      ) {
        label += " ( readonly )";
      } else {
        label += " ( optional )";
      }

      return label;
    }
  },
  methods: {
    customFieldUpdate: function(event){
        this.fieldData.value = event;
    },
    getMasking: function() {
        if (
            !this.isUndefined(this.fieldData.masking) && 
            this.fieldData.masking !== null
        ) {
            return this.fieldData.masking;
        }
        return null;
    },
    fieldValueLength: function(value) {
      return (value != null && !this.isUndefined(value)) ? value.length : 0;
    },
    displayCol() {
      if (this.isUndefined(this.fieldData.type)) return false;
      if (this.fieldData.type == "hidden") return false;
      if (!this.fieldLoaded) return false;
      return true;
    },
    prepareRules() {
      // BUILD FIELD RULES
      const rules = [];
      this.fieldData.rules.forEach(function(rule) {
        if (typeof rule.value === "boolean") {
          if (rule.value) {
            rules.push(rule.name);
          }
        } else {
          rules.push(rule.name + ":" + rule.value);
        }
      });
      return rules.join("|");
    },
    prepareProps(errors) {
      let result = {};
      const field = this.fieldData;
      result["error-messages"] = errors;
      result["label"] = this.displayLabel;
      result["outlined"] = field.outlined;
      result["dense"] = field.dense;

      if (field.type == "time") {
        result["populate"] = field.value;
        result["ampm_in_title"] = true;
        result["no_title"] = false;
        result["class"] = "mt-2";
      }

      if (field.type == "select" || field.type == "autocomplete") {
        result["selected"] =
          !this.isUndefined(field.integer) && field.integer
            ? parseInt(field.value)
            : field.value;

        const selectItems = field.items;
        if (!this.isUndefined(field.any_field) && field.any_field) {
          const anyfield = {};
          anyfield[field.item_value] = "any";
          anyfield[field.item_text] = "Any";
          if (!selectItems.some(e => e[field.item_value] === "any")) {
            selectItems.unshift(anyfield);
          }
        }
        result["item_value"] = field.item_value;
        result["item_text"] = field.item_text;
        result["items"] = selectItems;
        result["chips"] = field.chips;
        result["data-vv-name"] = "select";
      }

      if (field.type == "checkbox-group") {
        if (!this.isUndefined(field.switch)) {
            result["switch"] = field.switch;
        }

        result["items"] = field.items;
        result["item"] = field.item_value;
        result["data-vv-name"] = "checkbox";
      }

      if (field.type == "hidden") {
        result["class"] = "hidden-input";
      }

      if (!this.isUndefined(field.close_on_content_click)) {
        result["close-on-content-click"] = field.close_on_content_click;
      }

      if (!this.isUndefined(field.controls)) {
        result["controls"] = field.controls;
      }

      if (!this.isUndefined(field.step)) {
        result["step"] = field.step;
      }

      if (
        !this.isUndefined(field.component_type) &&
        field.component_type !== ""
      ) {
        result["type"] = field.component_type;
      }

      if (!this.isUndefined(field.min)) {
        result["min"] = field.min;
      }

      if (!this.isUndefined(field.max)) {
        result["max"] = field.max;
      }

      if (!this.isUndefined(field.placeholder)) {
        result["placeholder"] = field.placeholder;
      }

      if (!this.isUndefined(field.readonly)) {
        result["readonly"] = field.readonly;
      }

      if (!this.isUndefined(field.multiple)) {
        result["multiple"] = field.multiple;
      }

      if (!this.isUndefined(field.clearable)) {
        result["clearable"] = field.clearable;
      }

      if (!this.isUndefined(field.counter)) {
        result["counter"] = field.counter;
      }

      if (!this.isUndefined(field.maxlength)) {
        result["maxlength"] = field.maxlength;
      }

      if (!this.isUndefined(field.appendIcon)) {
        result["appendIcon"] = field.appendIcon;
      }

      if (!this.isUndefined(field.backgroundColor)) {
        result["backgroundColor"] = field.backgroundColor;
      }

      if (!this.isUndefined(field.error)) {
        result["error"] = field.error;
      }

      if (!this.isUndefined(field.errorCount)) {
        result["errorCount"] = field.errorCount;
      }

      if (!this.isUndefined(field.errorMessages)) {
        result["errorMessages"] = field.errorMessages;
      }

      if (!this.isUndefined(field.falseValue)) {
        result["falseValue"] = field.falseValue;
      }

      if (!this.isUndefined(field.flat)) {
        result["flat"] = field.flat;
      }

      if (!this.isUndefined(field.hideDetails)) {
        result["hideDetails"] = field.hideDetails;
      }

      if (!this.isUndefined(field.hideSpinButtons)) {
        result["hideSpinButtons"] = field.hideSpinButtons;
      }

      if (!this.isUndefined(field.hint)) {
        result["hint"] = field.hint;
      }

      if (!this.isUndefined(field.inputValue)) {
        result["inputValue"] = field.inputValue;
      }

      if (!this.isUndefined(field.inset)) {
        result["inset"] = field.inset;
      }

      if (!this.isUndefined(field.dark)) {
        result["dark"] = field.dark;
      }

      if (!this.isUndefined(field.light)) {
        result["light"] = field.light;
      }

      if (!this.isUndefined(field.messages)) {
        result["messages"] = field.messages;
      }

      if (!this.isUndefined(field.persistentHint)) {
        result["persistentHint"] = field.persistentHint;
      }

      if (!this.isUndefined(field.prependIcon)) {
        result["prependIcon"] = field.prependIcon;
      }

      if (!this.isUndefined(field.success)) {
        result["success"] = field.success;
      }

      if (!this.isUndefined(field.successMessages)) {
        result["successMessages"] = field.successMessages;
      }

      if (!this.isUndefined(field.trueValue)) {
        result["trueValue"] = field.trueValue;
      }

      if (!this.isUndefined(field.validateOnBlur)) {
        result["validateOnBlur"] = field.validateOnBlur;
      }

      if (!this.isUndefined(field.display)) {
        result["display"] = field.display;
      }

      if (field.component == "h2") {
        result = { "v-html": field.value };
      }
      return result;
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
.hidden-input {
  display: none;
}
</style>
