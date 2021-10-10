import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: { format: 'cjs', exports: 'default', file: 'dist/index.cjs.js' },
    plugins: [typescript({ tsconfig: 'tsconfig.json' })],
  },
  {
    input: 'src/index.ts',
    output: { format: 'esm', file: 'dist/index.js' },
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
];
