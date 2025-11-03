import js from "@eslint/js";
import globals from "globals";
import hooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react"; // важливо

export default [
  {
    ignores: ["dist", "node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      react,
      "react-hooks": hooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@app", "./src/app"],
            ["@features", "./src/features"],
            ["@pages", "./src/pages"],
            ["@assets", "./src/assets"],
          ],
          extensions: [".js", ".jsx", ".json", ".css"],
        },
      },
    },
    rules: {
      // головне правило, яке виправляє твою помилку
      "react/jsx-uses-vars": "error",

      // сучасний React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": "off",

      // хуки
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // утилітарні
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-undef": "error",
    },
  },
  js.configs.recommended,
];
