import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
  languageOptions: {
    globals: {
      ...globals.browser,
      Zotero_File_Interface_Bibliography: false,
      Components: false,
      Services: false,
      Iterator: false,
      dump: false,
      APP_SHUTDOWN: false,
      Zotero: true,
    },

    ecmaVersion: 2018,
    sourceType: "script",
  },

  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": ["off"],
    "no-empty": ["off"],
    "no-inner-declarations": ["off"],
    "keyword-spacing": ["error"],
    "no-var": ["error"],
    "no-cond-assign": ["off"],
    "no-useless-escape": ["off"],
    "no-constant-condition": ["off"],
    "for-direction": ["off"],
  },
}];
