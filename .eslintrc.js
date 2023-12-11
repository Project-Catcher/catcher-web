module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    "react-hooks/exhaustive-deps": "off",
  },
};
