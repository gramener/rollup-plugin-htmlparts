import htmlparts from '../dist/rollup-plugin-htmlparts.mjs'

export default [
  {
    input: 'index.js',
    output: { file: "index.esm.min.js", name: "package", format: "umd" },
    plugins: [htmlparts('template.html'), htmlparts('template2.html')]
  }
]
