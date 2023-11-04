/* eslint-disable no-undef */
/** @type {import("eslint").ESLint.ConfigData} */
const config = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ["dist", "node_modules"],
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:regexp/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react",
    "react-refresh",
    "promise",
  ],

  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        typescript: true,
      },
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "@custom-lib/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
      },
    ],
    "no-duplicate-imports": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    "import/newline-after-import": "error",
    "unicorn/no-null": "off",
  },

  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.cjs"],
    },
  ],
};

module.exports = config;
