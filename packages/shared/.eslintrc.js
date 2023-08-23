module.exports = {
  extends: [
    "../../packages/config/eslint-common",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
}
