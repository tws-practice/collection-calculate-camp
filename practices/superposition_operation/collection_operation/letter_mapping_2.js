'use strict';
let _=require('lodash');
var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function average_to_letter(collection) {
  let letter = _.chain(collection)
    .mean(collection)
    .ceil((element)=> element);

  return String.fromCharCode(letter + 96);
}

module.exports = average_to_letter;

