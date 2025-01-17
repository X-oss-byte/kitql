module.exports = {
  root: true,
  extends: '@theguild',
  rules: {
    'unicorn/no-array-push-push': 'off',
    'unicorn/filename-case': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error', 'time', 'timeEnd'] }],
    'no-restricted-syntax': 'off',
    'import/no-default-export': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/require-await': 'off',
    'import/extensions': 'off',
    'simple-import-sort/imports': 'off',
  },
  ignorePatterns: [
    'packages/all-in/**',
    'examples',
    'website',
    'dist',
    'vite.config.ts',
    'svelte.config.js',
    'graphql.config.cjs',
    'babel.config.js',
    '.eslintrc.cjs',
    '.prettierrc.cjs',
  ],
  plugins: ['svelte3'],
  overrides: [
    { files: ['*.svelte'], processor: 'svelte3/svelte3' },
    // {
    //   files: ['packages/all-in/*.ts'],
    //   parserOptions: { project: ['packages/all-in/tsconfig.json'] },
    // },
    // {
    //   files: ['packages/helper/*.ts'],
    //   parserOptions: { project: ['packages/helper/tsconfig.json'] },
    // },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
  },
}
