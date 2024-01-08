---
group: "getting-started"
icon: "carbon:bookmark"
title: "Installation"
---

# Installation

## Requirements

Your main project should have the following dependencies installed:

:::div data-table
| Package | Minimum Version |
| :-------------- | :-------------: |
| Vue 3 | ^3.3.4 |
| Vuetify | ^3.3.7 |
| Axios | ^1.4.0 |
| Cross-env | ^7.0 |
| Maska | ^2.1.10 |
| Moment Timezone | ^0.5.33 |
:::

## NPM Install

Install NPM Package:

```shell
npm install laravel-vue-easyforms
```

## Configuration

You need to load this plugin when you initialise your Vue instance:

```typescript
import FormLoaderPlugin from "laravel-vue-easyforms";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App)
  .use(FormLoaderPlugin, {
    backend_domain: "localhost",
    axios_prefix: "/api/1.0",
    csrf_endpoint: "/sanctum/csrf-cookie",
    uses_vue_router: false,
    required_tags_only: false,
    tags_on_placeholder: true,
    tags_on_labels: false,
  })
  .mount("#app");
```

The plugin has the following `PluginOptions` object with the below defaults:

```typescript
/**
 * Backend domain for making API calls.
 * It should end without a forward slash.
 * eg. https://domain.com
 */
backend_domain = "";
/**
 * The prefix for making calls via API, this is appended to the backend domain.
 * It should begin with a forward slash and end without a forward slash.
 * This should match laravel.
 * eg. /api/v1.0
 */
axios_prefix = "";
/**
 * If CSRF checks are required then this should be the endpoint.
 * It should begin with a forward slash and end without a forward slash.
 * eg. /security/cookie
 */
csrf_endpoint = "";
/**
 * Does your frontend application use vue router.
 */
uses_vue_router = false;
/**
 * Display required tags only, either tags_on_placeholder or tags_on_labels
 * must be set to true for this to take effect.
 */
required_tags_only = true;
/**
 * Should the placeholder text display required and optional tags
 */
tags_on_placeholder = true;
/**
 * Should the label text display required and optional tags
 */
tags_on_labels = false;
/**
 * Optional placeholder text to append placeholder attribute
 */
optional_placeholder_text = " ( * Optional )";
/**
 * Optional label text to append placeholder attribute
 */
optional_label_text = " ( * Optional )";
/**
 * Required placeholder text to append placeholder attribute
 */
required_placeholder_text = " ( * Required )";
/**
 * Required label text to append placeholder attribute
 */
required_label_text = " ( * Required )";
```

## Configuring CSRF

The CSRF system is based off [Laravel Sanctum](https://laravel.com/docs/10.x/sanctum#spa-authenticating) so it will make a call to a specific URL to request the `XSRF-TOKEN`

You should also make sure your main project sets axios defaults:

```js
axios.defaults.withCredentials = true;
```

For newer versions of axios (v1.6.1+) updating `withCredentials` with `withXSRFToken` will expose the correct headers.

## Vue Components

You are now ready to start using the form loader component.

```html
<FormLoader />
```
