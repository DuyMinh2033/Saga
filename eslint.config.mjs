import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintComments from 'eslint-plugin-eslint-comments';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'unused-imports': unusedImports,
      'eslint-comments': eslintComments,
      prettier,
    },
    // rules: {
    //   'react/self-closing-comp': 'error',
    //   // Cấm dùng `any`
    //   '@typescript-eslint/no-explicit-any': 'error',

    //   // Cấm import không dùng
    //   'unused-imports/no-unused-imports': 'warn',

    //   // Cảnh báo khi có biến không sử dụng
    //   '@typescript-eslint/no-unused-vars': [
    //     'warn',
    //     {
    //       args: 'all',
    //       argsIgnorePattern: '^_',
    //     },
    //   ],

    //   // Kiểm tra import theo thứ tự hợp lý
    //   'import/order': [
    //     'warn',
    //     {
    //       groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    //       'newlines-between': 'always',
    //     },
    //   ],

    //   // React-specific rules
    //   'react/prop-types': 'off',
    //   'react/react-in-jsx-scope': 'off',

    //   // ESLint comments plugin
    //   'eslint-comments/no-unused-disable': 'warn',

    //   'prettier/prettier': 'error',
    // },
  },
];
