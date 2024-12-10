import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";

/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    // Konfigurasi Dicoding Academy Style
    daStyle,

    // Aturan untuk file JavaScript
    {
      files: ["**/*.js"],
      languageOptions: {
        sourceType: "commonjs",
      },
    },

    // Aturan untuk global variables
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
    },

    // Plugin rekomendasi dari @eslint/js
    pluginJs.configs.recommended,
  ],
};

export default config;
