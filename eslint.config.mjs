import js from '@eslint/js';
import json from '@eslint/json';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import nlDesignSystemConfig from '@nl-design-system/eslint-config/configs/nl-design-system.config.mjs';

export default defineConfig([
  globalIgnores(['**/dist/', '**/build/', '**/coverage/', '**/tmp/']),
  {
    name: '@eslint/js recommended',
    files: ['**/*.{js,cjs,mjs,ts}'],
    ...js.configs.recommended,
  },
  {
    name: 'typescript-eslint recommended',
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
  },
  {
    name: '@eslint/json recommended - JSON',
    files: ['**/*.json'],
    ignores: ['**/tsconfig*.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  {
    name: '@eslint/json recommended - JSONC',
    files: ['**/tsconfig*.json'],
    language: 'json/jsonc',
    ...json.configs.recommended,
  },
  {
    name: '@nl-design-system/eslint-config/configs/nl-design-system.config.mjs',
    files: ['**/*.{js,cjs,mjs,ts}'],
    extends: [nlDesignSystemConfig],
  },
  {
    name: 'eslint-config-prettier',
    ...prettier,
  }
]);
