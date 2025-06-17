import neo, { resolveIgnoresFromGitignore, plugins } from 'neostandard';

export default [
  ...neo({
    ts: true,
    semi: true,
    ignores: resolveIgnoresFromGitignore()
  }),
  ...plugins['typescript-eslint'].configs.recommended,
  {
    rules: {
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'import-x/order': [
        'warn',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'internal',
            'external',
            'sibling',
            'parent',
            'index'
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ]
    }
  }
];
