const htmlparts = require('../dist/rollup-plugin-htmlparts.js')

export default [
  {
    input: 'index.js',
    output: { file: "index.cjs.min.js", name: "package", format: "umd" },
    plugins: [htmlparts('template.html'), htmlparts('template2.html')]
  }
]
