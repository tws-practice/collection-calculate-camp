'use strict';
let _ = require('lodash');
function even_to_letter(collection) {
  return _.chain(collection)
    .filter(element =>element % 2 === 0)
    .map((element) => {
      return String.fromCharCode(element + 96);
    })
    .value();

}
module.exports = even_to_letter;
