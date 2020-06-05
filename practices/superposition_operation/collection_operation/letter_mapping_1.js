'use strict';

let _ = require('lodash');

function even_to_letter(collection) {
  let diff = 'a'.charCodeAt(0) - 1;
  return _(collection)
    .filter(x => x%2===0)
    .map(x => x + diff)
    .map(x => String.fromCharCode(x))
    .value();
}

module.exports = even_to_letter;
