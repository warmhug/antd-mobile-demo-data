import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'lib/index.js',
  output: {
    name: 'antd-mobile-demo-data',
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: [
        ["@babel/preset-env", {
          modules: false,
          loose: true,
        }],
      ],
      exclude: 'node_modules/**'
    }),
  ],
};
