import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-console': 'off',

      'no-undef': 'off',

      'no-unused-vars': 'off',
    },
  },
];
