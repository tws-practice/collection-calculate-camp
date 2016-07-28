'use strict';
let _ = require('lodash');
function average_uneven(collection) {
  let collections = _
    .chain(collection)
    .filter(function (n) {
      return n % 2 === 1;
    }).value();

  let sum = _.chain(collections)
    .reduce(function (result, n) {
      return result + n;
    })
    .value();
  return sum / (collections.length);
}

module.exports = average_uneven;
