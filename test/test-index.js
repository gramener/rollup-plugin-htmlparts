const test = require('tape')
const { rollup } = require('rollup')
const { htmlparts } = require('../')

process.chdir('test')

test('basic', t => {
  rollup({
    input: 'basic.js',
    plugins: [htmlparts('basic.html')]
  }).then(bundle => bundle.generate({ format: 'iife', moduleName: 'tpl' }))
    .then(obj => {
      new Function('t', obj.output[0].code)(t)
      t.end()
    })
})

test('error', t => {
  rollup({
    input: 'error.js',
    plugins: [htmlparts('basic.html')]
  }).catch(() => {
    t.end()
  })
})
