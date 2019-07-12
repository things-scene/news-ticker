import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import json from 'rollup-plugin-json'

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)
let plugins = [
  commonjs(),
  globals(),
  builtins(),
  json(),
  babel(),
  resolve({ browser: true, preferBuiltins: true }),
  terser({
    sourcemap: true
  })
]

export default [
  {
    input: 'src/index.js',
    plugins,
    external,
    output: [
      {
        file: 'dist/things-scene-news-ticker.js',
        name: 'things-scene-news-ticker',
        format: 'umd',
        globals: {
          '@hatiolab/things-scene': 'scene'
        }
      }
    ]
  },
  {
    input: 'src/index.js',
    plugins,
    external: ['@hatiolab/things-scene'],
    output: [
      {
        file: pkg.module,
        format: 'esm'
      }
    ]
  }
]
