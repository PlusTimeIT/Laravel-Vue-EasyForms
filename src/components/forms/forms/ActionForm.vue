<template>

    <v-row :justify="getJustify">
        <v-col
            v-for="(action, index) in filteredActions"
            :key="index"
            :cols="getCols(action)"
            class="py-0 px-2"
        >
            <easy-icon
                v-if="!isUndefined(action.icon)"
                :icon="action.icon"
                :identifier="action.identifier"
                @click="runAction(action.identifier)"
            >
            </easy-icon>
            <easy-button
                v-if="!isUndefined(action.button)"
                :button="action.button"
                :identifier="action.identifier"
                @click="runAction(action.identifier)"
            >
            </easy-button>
        </v-col>
    </v-row>

</template>

<script>

import {FormMixin} from '../mixins/FormMixins';
import EasyButton from '../parts/Button.vue';
import EasyIcon from '../parts/Icon.vue';

export default {
  name: 'ActionForm',
  components: {
      EasyButton,
      EasyIcon
  },
  mixins: [FormMixin],
  props: {
    identifier: {
      type: [Array, String, Object],
      default: function() {
        return null;
      },
    },
    additional_form_data: {
      type: Object,
      default: () => ({}),
    },
    cols: {
      type: Number,
      default: 12,
    },
    sm: {
      type: Number,
      default: 12,
    },
    md: {
      type: Number,
      default: 12,
    },
    lg: {
      type: Number,
      default: 12,
    },
    form: {
      type: Object,
      default: () => ({}),
    },
    populate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loadedForm: false
    };
  },
  created(){
      this.loadedForm = this.form;
  },
  methods:{
      getJustify(){
        return !this.isUndefined(this.loadedForm.justify) ? this.loadedForm.justify : 'center';
      },
      getCols(action){
        let cols = (!this.isUndefined(this.loadedForm.inline) && this.loadedForm.inline) ? 'col-auto' : 12;
        //override if set on action
        if( !this.isUndefined(action.cols) && action.cols !== null ){
          cols = action.cols;
        }
        return cols;
      },
      runAction(identifier){
        this.processForm(this.loadedForm, [], this.loadedIdentifier, this.loadedAdditionalFormData, identifier );
      },
      checkActionDisplay: function( action ) {
        let _this = this;
        if( ! this.isUndefined(action.conditions) && action.conditions !== null ){
            let results = [];
            action.conditions.forEach( function(condition){
                results.push(eval( '"' + _this.loadedAdditionalFormData[condition.check] + '" ' + condition.operator + ' "' + condition.against + '"' ));
            });
            if( results.includes(false) ){
                return false;
            }
        }
        return true;
    },
  },
  computed: {
    loadedIdentifier: function() {
      return this.identifier;
    },
    loadedAdditionalFormData: function() {
      return this.additional_form_data;
    },
    filteredActions: function() {
        let _this = this;
        return this.loadedForm.actions.filter(function(action){
            return _this.checkActionDisplay(action)
        });
    },
  }
}

</script>
