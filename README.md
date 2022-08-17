# Laravel EasyForms NPM
Help with dev:
- https://github.com/PlusTimeIT/Laravel-Vue-EasyForms

To be used with Laravel EasyForms Backend Package
- https://github.com/PlusTimeIT/Laravel-EasyForms


## Building the package:
- Run `npm run build-library --fix`
- Increase version number from package.json
- Upload to npmjs.com `npm publish`


## Installing the package:
- Axios must be imported into the parent project and set: `Vue.prototype.axios = axios;`