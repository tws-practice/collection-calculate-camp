'use strict';

let _ = require('lodash');

function average_to_letter(collection) {
  let sum = _.sum(collection);
  let average = Math.ceil(sum/collection.length);
  let diff = average - 1;
  return String.fromCharCode('a'.charCodeAt(0) + diff);
}

module.exports = average_to_letter;

