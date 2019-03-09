# rollup-plugin-htmlparts

[![Build Status](https://travis-ci.com/gramener/rollup-plugin-htmlparts.svg)](https://travis-ci.com/gramener/rollup-plugin-htmlparts)

This helps you import HTML snippets into JavaScript variables using modules.

Suppose you want this in your `index.js`:

```js
var heading = '<h1>This is the <em>heading</em></h1>'
var body = '<p>This is the <strong>body</strong>.</p>'
```

... but prefer to use HTML files to save HTML (for syntax-highlighting, etc.),
then create a HTML file like this (called, for example, `template.html`):

```html
<!-- var heading -->
  <h1>This is the <em>heading</em></h1>
<!-- end -->

<!-- var body -->
  <p>This is the <strong>body</strong>.</p>
<!-- end -->
```

Set up your `rollup.config.js` like this:

```js
import htmlparts from 'rollup-plugin-htmlparts'

export default [
  {
    input: 'index.js',
    output: { file: "index.min.js", name: "package", format: "umd" },
    plugins: [htmlparts('template.html')]
  }
]
```

Now, in the `index.js` mentioned above, you can import variables from
`template.html`.

```js
import { heading, body } from './template.html'
```

Run `node_modules/.bin/rollup -c` to create the `index.min.js`, which
will have the imported variables.

## HTML structure

Anything enclosed within `<!-- var <name> --> ... <!-- end -->` is treated as
a HTML string and assigned to the variable `<name>`.

The string is minified by [HTML Minifier](http://npmjs.com/package/html-minifier)
with these options:

- `collapseBooleanAttributes: true`
- `collapseInlineTagWhitespace: true`
- `collapseWhitespace: true`
- `decodeEntities: true`
- `removeComments: true`

## Installation

```sh
yarn install rollup-plugin-htmlparts
# OR
npm install rollup-plugin-htmlparts
```

## Changelog

- 1.0.0: 9 Mar 2019 - Initial release

## Release

```sh
# Update package.json version
# Update Changelog in README.md
npm test
git commit . -m"DOC: Release version x.x.x"
git push
# Ensure that there are no CI build errors
git tag -a vx.x.x -m"Add a one-line summary"
git push --follow-tags
npm publish     # maintainer: sanand0
```
