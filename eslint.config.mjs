import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18n from "shared/config/i18n/i18n";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
  rules: {
    '@typescript-eslint/no-unused-vars': "off",
    "react/react-in-jsx-scope": "off",
  },
  },
  {
    plugins: {
      "i18next": i18n.plugin,
    },
  },
];
