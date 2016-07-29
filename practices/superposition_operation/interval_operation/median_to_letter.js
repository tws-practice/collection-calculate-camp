'use strict';

let _ = require('lodash');

function _toCharNumber(charCode) {
  ???
}

function median_to_letter(collection) {
  let sorted = _.sortBy(collection);
  if(sorted.length % 2 === 0) {
    let m1 = collection[Math.floor(sorted.length/2-1)];
    let m2 =  collection[Math.floor(sorted.length/2)];
    let median = Math.ceil(_.mean([m1,m2]));
    console.log(median);
    return _toCharNumber(median);
  } else {
    let median = sorted[Math.floor(sorted.length/2)]
    return _toCharNumber(median);
  }
}

module.exports = median_to_letter;
