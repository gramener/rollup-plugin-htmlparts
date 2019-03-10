var pkg = require('./package.json')

export default {
  input: 'index.js',
  output: [
    { format: 'cjs', file: pkg['main'] },
    { format: 'esm', file: pkg['jsnext:main'] }
  ]
}
