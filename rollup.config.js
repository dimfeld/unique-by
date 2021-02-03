export default {
  input: 'index.js',
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
