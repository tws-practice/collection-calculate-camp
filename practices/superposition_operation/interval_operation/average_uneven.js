'use strict';
let _ = require("lodash");

function average_uneven(collection) {

  let result = _(collection).filter(x =>x%2 === 1).value();
  let average = _.sum(result)/result.length;
  return average;
}

module.exports = average_uneven;
