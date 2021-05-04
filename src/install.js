/* eslint-disable */
import * as components from "./components";

const install = (Vue = {}) => {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(component.name, component);
  });
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { install };
