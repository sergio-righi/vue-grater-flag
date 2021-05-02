# Quick Started

A short guide to get started using the library.

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

```bash
$ npm install grater-vue --save
```

Then register `grater-vue` components and directives all at once in your app's entry:

```js
// plugins/grater-vue.js
import Vue from "vue";
import * as GraterVue from "grater-vue/dist/grater-vue.umd.min";
import "grater-vue/dist/grater-vue.css";

Vue.use(GraterVue);
```

## Disclaimer

This library is currently __under development__ and features are constantily being added, be aware that issues might happen.