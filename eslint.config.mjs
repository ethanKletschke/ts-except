import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import chaiFriendly from "eslint-plugin-chai-friendly";
import { defineConfig } from "eslint/config";
import tsdoc from "eslint-plugin-tsdoc";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      js,
      tsdoc
    },
    extends: ["js/recommended"],
    rules: {
      "tsdoc/syntax": "error"
    }
  },

  tseslint.configs.recommended,

  {
    files: ["**/*.spec.{ts,js}", "**/*.test.{ts,js}"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
    plugins: {
      "chai-friendly": chaiFriendly,
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "chai-friendly/no-unused-expressions": "error"
    },
  },
]);
