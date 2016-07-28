'use strict';
let _ = require('lodash');
var calculate_median = function (collection) {
  let a = _.chain(collection)
    .filter((element, index)=> {
      if (index % 2 === 1) {
        if (_.every(element % 2 === 1)) {
          return element;
        }
        else {
          return element;
        }
      }
    })
    .sort()
    .value();

  return a.length % 2 !== 0 ? a[(a.length - 1) / 2] :
    _.chain(a)
      .sort()
      .mean([a[a.length / 2], a[a.length / 2 - 1]])
      .ceil((element)=> element)
      .value();
};
module.exports = calculate_median;
