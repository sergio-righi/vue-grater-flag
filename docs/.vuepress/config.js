const { resolve } = require("path");

module.exports = {
  base: "/",
  title: "Grater Flag Vue",
  description: "Just playing around",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/" },
      {
        text: "Github",
        link: "https://github.com/sergio-righi/vue-grater-flag",
      },
    ],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: ["introduction/guide"],
      },
      {
        title: "Components",
        collapsable: false,
        sidebarDepth: 2,
        children: ["components/flag"],
      },
    ],
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        "@": resolve(__dirname, "../../src"),
        flag: resolve(__dirname, "../../public/flag"),
        "grater-flag-vue": resolve(__dirname, "../../src"),
      },
    },
  },
};
