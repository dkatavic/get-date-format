module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "never"]
  }
};
