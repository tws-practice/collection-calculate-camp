'use strict';
let _ = require('lodash');
var calculate_median = function (collection) {
  let evenNumbered = false;

  let evenIndexArray = _.chain(collection)
    .filter((item, index)=>(index + 1) % 2 == 0)
    .sort()
    .value();

  let length = _.size(evenIndexArray);

  return length % 2 === 0 ? (evenIndexArray[length / 2] + evenIndexArray[length / 2 - 1]) / 2 : evenIndexArray[_.floor(length / 2)];

};
module.exports = calculate_median;

