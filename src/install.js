import FormLoader from "./components/forms/FormLoader.vue";

const S2NEasyForms = {
    install(Vue, options) {
        Vue.component( "form-loader" , FormLoader );
    }
};


if ( typeof window !== 'undefined' && window.Vue ) {
    window.Vue.use( FormLoader );
}

export default FormLoader;