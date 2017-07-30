'use strict';
let _=require('lodash');
var calculate_median = function (collection) {
  let a = _.chain(collection)
    .filter((element, index)=> {
      if (index % 2 !== 0)
        return element;
    })
    .sort()
    .value();
  //console.log(a);
  let length = a.length;
  let result = length % 2 !== 0 ? a[(length - 1) / 2] :
    _.chain(a)
      .mean([a[length / 2], a[length / 2 - 1]])
      .ceil()
      .value();
  return result;
};
module.exports = calculate_median;
