import pluginJs from '@eslint/js'
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'
export default [
  {
    ignores: ['/node_modules/', '.dist/'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },

    // extends: [
    //   'eslint:recommended',
    //   'plugin:@typescript-eslint/recommended',
    //   'prettier',
    // ],

    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      'no-any': 'allow',
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
]
