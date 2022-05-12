// import json from '@rollup/plugin-json';
// import { terser } from 'rollup-plugin-terser';
// 配置babel
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/bundle.js',
    format: 'cjs'
	},
  //  {
  //     file: 'dist/bundle.min.js',
  //     format: 'iife',
  //     name: 'version',
  //     plugins: [terser()]
  //   }
  ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.ts', '.js'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript'
        ]
      })
    ]
  //  plugins: [json()]
};


