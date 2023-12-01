/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:vitest-globals/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["**/tests/*.{j,t}s?(x)", "**/*.spec.{j,t}s?(x)"],
      env: {
        "vitest-globals/env": true,
      },
    },
    {
      files: ["*.ts"],
      rules: {
        "prefer-const": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "prettier/prettier": "error",
    "standard/computed-property-even-spacing": "off",
    "lines-between-class-members": "off",
    "no-template-curly-in-string": "off",
    camelcase: "off",
    "import/no-duplicates": "off",
    "no-unusued-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/__tests__/**/*.{ts,js}", "**/*.test.{ts,js}", "**/test.{ts,js}"],
      },
    ],
  },
};
