import babel from 'rollup-plugin-babel';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import pkg from './package.json';

export default {
  input: 'src/components/Flag/index.js',
  output: [
    {
      dir: pkg.main.substring(0, pkg.main.lastIndexOf('/')),
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: pkg.module.substring(0, pkg.module.lastIndexOf('/')),
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: [
        './dist/'
      ]
    }),
    external(),
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
  experimentalCodeSplitting: true,
};
