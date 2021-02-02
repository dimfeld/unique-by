export default {
  input: 'index.mjs',
  output: [
    {
      format: 'cjs',
      file: 'dist/index.cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      format: 'esm',
      file: 'dist/index.mjs',
      sourcemap: true,
    },
  ],

  plugins: [],
};
