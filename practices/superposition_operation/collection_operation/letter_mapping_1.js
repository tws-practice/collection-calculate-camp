'use strict';
let _ = require('lodash');

function even_to_letter(collection) {
  return _.chain(collection)
    .map(x=> _.toString(x + 96))
    .map(x=> String.fromCharCode(x))
    .filter((x, y)=>y % 2 !== 0)
    .value();
}

module.exports = even_to_letter;
