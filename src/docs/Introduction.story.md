---
group: "top"
icon: "carbon:bookmark"
title: "Intro"
---

# Introduction

This Vue plugin was built to make frontend form handling and building easy. It takes a form (either Input or Action) as a prop, and will handle all building, masking, validations, requests and responses.

It's designed to be use with the [Laravel EasyForms](https://packagist.org/packages/plustime-it/laravel-easyforms) Package for Laravel, helping to keep all form data in one place.

::: alert info
It's not required to use the parent package, but you will need to conform to the data requirements when passing in / loading the forms.
:::

## Documentation Notes

This documentation is only for this plugins version greater than `0.4.13-beta` and with the parent plugin [Laravel EasyForms `0.2.4@beta`](https://packagist.org/packages/plustime-it/laravel-easyforms) ( due to moving to Vue3 and Typescript ). You must also set your vuetify version to be greater than `Vuetify 3.3.7`.

Whilst versions lower than this still work and are pretty similar, there are some breaking changes and no Vue 2 documentation is provided. If you decide to head down that road. Good luck solider.

## Design Framework

This plugin utilizes [Vuetify](https://vuetifyjs.com/) as a framework for displaying inputs, alerts, buttons etc. It also follows the Grid layout for the most part.
