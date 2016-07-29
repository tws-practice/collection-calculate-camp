'use strict';

let _ = require('lodash');

function average_uneven(collection) {
  let odds = _.filter(collection, x=>x%2===1);
  let sum = _.sum(odds);
  return sum/odds.length;
}

module.exports = average_uneven;
