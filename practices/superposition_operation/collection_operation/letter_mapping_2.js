'use strict';
let _ = require('lodash');

function average_to_letter(collection) {
  let average = _.chain(collection)
    .mean()
    .ceil()
    .value();

  return String.fromCharCode(average + 96);

}

module.exports = average_to_letter;

