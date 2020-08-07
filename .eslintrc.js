module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb", "prettier", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
