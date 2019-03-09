# rollup-plugin-htmlparts

[![Build Status](https://travis-ci.com/gramener/rollup-plugin-htmlparts.svg)](https://travis-ci.com/gramener/rollup-plugin-htmlparts)

Loads parts of a HTML file as a module. If you have this `template.html`:

```html
<!-- var heading -->
  <h1>This is the <em>heading</em></h1>
<!-- end -->

<!-- var body -->
  <p>This is the <strong>body</strong>.</p>
<!-- end -->
```

... then:

```js
import { heading, body } from './template.html'
assert heading == '\n  <h1>This is the <em>heading</em>\n'
assert body == '\n  <p>This is the <strong>body</strong>.</p>\n'
```

## Installation

```sh
yarn install rollup-plugin-htmlparts
# OR
npm install rollup-plugin-htmlparts
```

## Usage

Configure `rollup.config.js` to allow import HTML files:

```js
import htmlparts from "rollup-plugin-htmlparts"

export default [
  {
    input: "index",
    output: { file: "dist/index.min.js", name: "package" },
    plugins: [ htmlparts("template.html") ]
  }
]
```

Now you import HTML files in any JS file handled by rollup:

```js
import * as default_templates from './template.html'
import { heading, body } from './template.html'
```

# Changelog

# Release

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
