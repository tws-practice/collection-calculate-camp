'use strict';
let _ =require('lodash')
function average_to_letter(collection) {
  let average =_.sum(collection)/collection.length;

  return String.fromCharCode(_.ceil(average) + 96);
}

module.exports = average_to_letter
