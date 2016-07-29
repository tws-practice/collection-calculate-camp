'use strict';
let _ =require('lodash')
function even_to_letter(collection) {
  return _(collection)
    .filter(x =>x % 2 == 0)
    .map(number=> String.fromCharCode(number + 96))
    .value();
}
module.exports = even_to_letter;
