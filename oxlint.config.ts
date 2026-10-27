import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: [
    'import',
    'jsx-a11y',
    'node',
    'oxc',
    'promise',
    'react-perf',
    'react',
    'typescript',
    'unicorn',
  ],

  categories: {
    correctness: 'error',
  },

  rules: {
    'typescript/no-floating-promises': [
      'error',
      {
        allowForKnownSafeCalls: [
          {
            from: 'package',
            package: 'node:test',
            name: ['suite', 'test'],
          },
        ],
      },
    ],
  },

  env: {
    builtin: true,
  },

  options: {
    typeAware: true,
    typeCheck: false,
  },

  ignorePatterns: [
    '**/dist',
    '**/node_modules',
    '**/target',
    '.agents/skills',
    '.moon/cache',
    '.moon/docker',
    '.pnp.*',
    '.yarn',
  ],
})
