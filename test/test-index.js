const test = require('tape')
const { rollup } = require('rollup')
const { htmlparts } = require('../')
const { exec } = require('child_process')
const { unlinkSync, existsSync } = require('fs')

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

test('sample app', t => {
  if (existsSync('index.min.js'))
    unlinkSync('index.min.js')
  exec('rollup -c', (error) => {
    t.notOk(error)
    exec('node index.min.js', (error, stdout) => {
      t.notOk(error)
      t.equals(stdout, '<h1>This is the<em>heading</em></h1>\n<p>This is the<strong>body</strong>.</p>\n')
      t.end()
    })
  })
})
