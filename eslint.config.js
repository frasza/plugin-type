import antfu from '@antfu/eslint-config'
import prettier from 'eslint-config-prettier'
import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()

export default withNuxt(
  antfu({
    stylistic: false,
    rules: {
      'no-console': 'warn',
      'antfu/top-level-function': 'error',
    },
  }),
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
  prettier,
)
