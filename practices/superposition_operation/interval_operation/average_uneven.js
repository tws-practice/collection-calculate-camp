'use strict';
let _ = require('lodash');
function average_uneven(collection) {
  let average = _.chain(collection)
    .filter((element)=> {
      return element % 2 !== 0;
    }).mean().value();
  return average;
}

module.exports = average_uneven;
