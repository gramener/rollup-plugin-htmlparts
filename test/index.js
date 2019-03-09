import { heading, body } from './template.html'
import { x, y } from './template2.html'
const assert = require('assert')

assert.equal(heading, '<h1>This is the<em>heading</em></h1>')
assert.equal(body, '<p>This is the<strong>body</strong>.</p>')

assert.equal(x, 'This is x<p>spaces trimmed</p>')
assert.equal(y, '<h1 class="x">This is y</h1>')
