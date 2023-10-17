---
group: 'forms'
icon: 'carbon:bookmark'
title: 'Form Basics'
---
:::stylesheet ./src/histoire/styles/histoire.css :::

# Form Basics

## Loading Forms

There are 2 basic methods for loading in forms.

1. Server Side Loading: Pass in the form name only and this plugin will make a request to the server to get the form data.

2. Client Side Loading: Pass in the full form object (either Input or Action Form). No server side request is needed. This feature allows you to load the form object eg: form loads from Laravel View and is passed as data.

## Form Types

This plugin defines forms in 2 ways - Input and Action.

### 1. Input Forms

Input Forms are your typical user forms that require some sort of input, like a login page, general CRUD actions etc. Input Forms can utilize textfields, autocompeletes, checkboxes, radio groups etc.

### 2. Action Forms

Action Forms are used when you need to have an action performed, this is typically through a set of buttons or icons.

For more  information about how forms are constructed, check out the parent package [Laravel EasyForms](https://packagist.org/packages/plustime-it/laravel-easyforms)
