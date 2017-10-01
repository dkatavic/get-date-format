module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  // extends: ["eslint:recommended"],
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    // "prettier/prettier": [
    //   "error",
    //   {
    //     singleQuote: true,
    //     jsxBracketSameLine: true,
    //     trailingComma: "es5",
    //     printWidth: 80
    //   }],
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    semi: ["error", "never"]
  }
};
