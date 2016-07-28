'use strict';
let _=require('lodash');
function average_to_letter(collection) {
  let a = _.chain(collection)
    .mean(collection)
    .ceil((element)=> {
      return element;
    });
  let b = String.fromCharCode(a + 96);
  return b;
}

module.exports = average_to_letter;

