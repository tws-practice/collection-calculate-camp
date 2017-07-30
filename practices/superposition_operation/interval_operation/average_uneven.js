'use strict';

let _ = require('lodash');

function average_uneven(collection) {
  return _(collection)
    .remove(n => n % 2 === 1)
    .mean();
}

module.exports = average_uneven;
