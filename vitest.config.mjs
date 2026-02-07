import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.js'],
    testTimeout: 20000,
    globals: true,
  },
});
