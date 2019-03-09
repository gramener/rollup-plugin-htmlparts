import htmlparts from '../index.js'

export default [
  {
    input: 'index.js',
    output: { file: "index.min.js", name: "package", format: "umd" },
    plugins: [htmlparts('template.html'), htmlparts('template2.html')]
  }
]
