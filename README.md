# Quick Started

A short guide to get started using the library.

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

```bash
$ npm install grater-vue-flag --save
```

Then register `grater-vue-flag` components and directives all at once in your app's entry:

```js
// plugins/grater-vue-flag.js
import Vue from "vue";
import * as GraterVueFlag from "grater-vue/dist/grater-vue-flag.umd.min";

Vue.use(GraterVueFlag);
```

### Disclaimer

The library is currently under development and issues may occur, be aware of it and stay updated to get the latest version.
