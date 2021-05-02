module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "linebreak-style": 0,
    "comma-dangle": ["error", "only-multiline"],
    "arrow-body-style": ["error", "as-needed"],
    quotes: [2, "double", { avoidEscape: true }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
