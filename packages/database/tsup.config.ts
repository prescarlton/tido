import { defineConfig } from 'tsup'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: isProd,
  sourcemap: true,
})
