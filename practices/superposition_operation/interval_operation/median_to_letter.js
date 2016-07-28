'use strict';
let _ = require('lodash');
function median_to_letter(collection) {
  let sortedArray = _.sortBy(collection);
  let len = sortedArray.length;
  if (len % 2 === 1) {
    let middlenumber = sortedArray[_.floor(len / 2)];
    let shiwei = parseInt(middlenumber / 26);
    let gewei = middlenumber % 26;
    let a = [String.fromCharCode(shiwei + 96), String.fromCharCode(gewei + 97)];
    return a.join('');
  } else {
    let middleNumber = _.ceil((sortedArray[len / 2] + sortedArray[len / 2 - 1]) / 2);
    let shiwei = parseInt(middleNumber / 26);
    let gewei = middleNumber % 26;
    let a = [String.fromCharCode(shiwei + 96), String.fromCharCode(gewei + 96)];
    return a.join('');
  }
}

module.exports = median_to_letter;
