module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  "parser": "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "import/prefer-default-export": 0,
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "react/jsx-filename-extension": 0,
  },
};
