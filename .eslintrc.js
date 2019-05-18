module.exports = {
  plugins: [
    "@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    jsx: true,
    useJSXTextNode: true,
    sourceType: "module",
    ecmaFeatures: {
        jsx: true
    }
  },
  rules: {},
}
