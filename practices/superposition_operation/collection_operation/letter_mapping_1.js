'use strict';
let _ = require('lodash');
function even_to_letter(collection) {
  let even = _.chain(collection)
    .filter(n=> n % 2 === 0)
    .map(n=>String.fromCharCode(n + 96))
    .value();
  return even;
}

module.exports = even_to_letter;
