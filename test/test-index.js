const test = require('tape')
const { exec } = require('child_process')
const { unlinkSync, existsSync } = require('fs')

process.chdir('test')

test('sample app', t => {
  if (existsSync('index.min.js'))
    unlinkSync('index.min.js')
  exec('rollup -c', (error) => {
    t.notOk(error)
    exec('node index.min.js', (error) => {
      t.notOk(error)
      t.end()
    })
  })
})
