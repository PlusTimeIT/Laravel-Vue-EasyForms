# Laravel EasyForms NPM
Help with dev:
- https://github.com/PlusTimeIT/Laravel-Vue-EasyForms

To be used with Laravel EasyForms Backend Package
- https://github.com/PlusTimeIT/Laravel-EasyForms

## Vuetify

This package is designed to use vuetify components (and custom components). 

## Installing on Frontend Vue Project

Install Laravel Vue EasyForms through npm.
```shell
npm i laravel-vue-easyforms
```

Inside your main.js file you need to setup the form loader. 

```vue
import FormLoader from 'laravel-vue-easyforms'

Vue.use(FormLoader, {
  axiosPrefix: 'localhost/api', // URL to Backend Project with Laravel EasyForms installed
  axios: axios,  // Axios instance passed through to Form Loader
  vueRouter: true, // Does this project us vueRouter?
})

```

## Loading Forms in project.

In your Vue files you can now use the form lader to load forms from your Laravel Backend.

The bare minimum requires a form name to load the data.

```vue
<form-loader
    load_form="Customer\Create"
/>
```

`load_form` takes 2 types of parameters:
1. The form name to load, this uses the saved Form namespace saved on the Backend Project and appends the form name. For instance if you have the default namespace saved `App\Http\Forms` then the form loader will load the form `App\Http\Forms\Customer\Create`
2. The full form object, if the frontend and backend project are in the same project. This allows Laravel to load the form and pass it as a page parameter from the View. (meaning no API call is needed to load it)

## Form Events

The form loader triggers multiple events:

| Event       | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| @loaded     | triggered when form has successfully loaded.                                           |
| @loading    | triggered when the form is in a loading state (including processing)                   |
| @results    | triggered when the form has results from processing.                                   |
| @reset_form | triggered when the form has been successfully reset (this comes from the reset button) |
| @cancelled  | triggered when the form has been cancelled (this comes from the cancel button)         |
| @updated    | triggered when the field values have been updated.                                     |