import { defineConfig } from 'rollup'
import typescript from 'typescript'
import rollupTSPlugin from 'rollup-plugin-typescript2'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: 'esm/index.esm.js',
      format: 'esm',
    },
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    rollupTSPlugin({
      useTsconfigDeclarationDir: true,
      exclude: 'node_modules/**',
      typescript,
    }),
  ],
})
