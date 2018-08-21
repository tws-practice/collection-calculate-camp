'use strict';
let _ = require('lodash');
function even_to_letter(collection) {
  return _.chain(collection)
    .filter(x =>x % 2 === 0)
    .map(x=>String.fromCharCode(x + 96))
    .value();
}
module.exports = even_to_letter;
