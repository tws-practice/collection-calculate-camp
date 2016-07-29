'use strict';
let _ = require('lodash');
function median_to_letter(collection) {
  let middleArray = [];
  let sorted = _.sortBy(collection);
  let middleSum = _.chain(sorted)
    .sort()
    .filter((item, index, items)=> {
      let number = index * 2 - items.length;
      return number === -1 || number == 0 || number === -2
    })
    .sum()
    .value();

  let middle;
  if (middleSum.length === 1)
    middle = middleSum[0];

  while (middle) {
    middleArray.push(middle % 26);
    middle = _.floor(middle / 26);
    if (middle < 26) {
      middleArray.push(middle);
      break;
    }
  }

  return _(middleArray)
    .map(x=>x - 1)
    .map(x=>"a".charCodeAt(0) + x)
    .map(x=>String.fromCharCode(x))
    .reverse()
    .join('')
}
module.exports = median_to_letter;
