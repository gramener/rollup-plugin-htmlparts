/*
Export all templates in a HTML file as variables. Their value is their inner
HTML, minified.
*/

'use strict'

const rollupPluginutils = require('rollup-pluginutils')
const htmlMinifier = require('html-minifier')

function htmlparts(includes) {
  const filter = rollupPluginutils.createFilter([includes], [])
  return {
    name: 'htmlparts',
    transform: function(code, id) {
      if (filter(id)) {
        const matches = code.match(/<!-- var .*? -->[\s\S]*?<!-- end -->/igm)
        const result = matches.map(function(match) {
          const lines = match.split(/\n/)
          const name = lines[0].split(/ /)[2]
          const html = htmlMinifier.minify(lines.slice(1, -1).join('\n'), {
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            decodeEntities: true,
            removeComments: true,
          })
          return 'export var ' + name + ' = ' + JSON.stringify(html) + ';'
        }).join('\n')
        return { code: result, map: { mappings: '' } }
      }
    }
  }
}

exports.htmlparts = htmlparts
