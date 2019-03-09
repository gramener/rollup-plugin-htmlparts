const { htmlparts } = require('..')

export default [
  {
    input: 'index.js',
    output: { file: "index.min.js", name: "package", format: "umd" },
    plugins: [htmlparts('template.html')]
  }
]
