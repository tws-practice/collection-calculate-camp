'use strict';
let _=require('lodash');
function even_to_letter(collection) {
  return _.chain(collection)
    .map(element=>String.fromCharCode(element + 96))
    .filter((element, index)=> index % 2 === 1)
    .value();
}
module.exports = even_to_letter;
