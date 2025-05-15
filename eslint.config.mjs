import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs'
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];