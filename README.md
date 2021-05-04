# Quick Started

A short guide to get started using the library.

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

```bash
$ npm install grater-flag-vue --save
```

Then register `grater-flag-vue` components and directives all at once in your app's entry:

```js
// plugins/grater-flag-vue.js
import Vue from "vue";
import * as GraterFlagVue from "grater-vue/dist/grater-flag-vue.umd.min";

Vue.use(GraterFlagVue);
```

### Disclaimer

The library is currently under development and issues may occur, be aware of it and stay updated to get the latest version.
