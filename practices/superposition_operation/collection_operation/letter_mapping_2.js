'use strict';

let _ = require('lodash');

function average_to_letter(collection) {
  let diff = 'a'.charCodeAt(0) - 1;
  let average = _.chain(collection)
    .mean()
    .ceil()
    .value();
  return String.fromCharCode(average + diff);
}

module.exports = average_to_letter;

