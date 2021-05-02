"use strict";

const { resolve } = require("path");

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        "@": resolve(__dirname, "src"),
        flag: resolve(__dirname, "public/flag"),
      },
    },
  },
};
