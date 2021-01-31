import FormLoader from "./components/forms/FormLoader.vue";

const S2NEasyForms = {
  install( Vue ) {
    Vue.component( "form-loader" , FormLoader );
  }
};

if ( typeof window !== "undefined" && window.Vue ) {
  window.Vue.use( S2NEasyForms );
}

export default S2NEasyForms;
