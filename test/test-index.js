const test = require('tape')
const { exec } = require('child_process')
const { unlinkSync, existsSync } = require('fs')

process.chdir('test')

var conf = [
  { conf: 'rollup.config.cjs.js', out: 'index.cjs.min.js' },
  { conf: 'rollup.config.esm.js', out: 'index.esm.min.js' },
]
conf.forEach(function(row) {
  test(row.conf, t => {
    if (existsSync(row.out))
      unlinkSync(row.out)
    exec('rollup -c ' + row.conf, (error) => {
      t.notOk(error, 'rollup -c compiles')
      exec('node ' + row.out, (error) => {
        t.notOk(error, 'html matches')
        t.end()
      })
    })
  })
})
