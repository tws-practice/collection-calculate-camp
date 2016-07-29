'use strict';
let _ = require('lodash');
function median_to_letter(collection) {
  let result = _.chain(collection)
    .sort()
    .filter((item, index, items)=> {
      let number = index * 2 - items.length;
      return number === 0 || number === -1 || number === -2;
    })
    .value();
  let average = 0;
  if (result.length > 1) {
    average = _.sum(result) / 2;
  } else {
    average = result;
  }
  let a = _.floor(average / 26);
  let k = _.ceil(average % 26);
  console.log(k);
  let string = String.fromCharCode((a + 96), (k + 96));
  return string;
}
module.exports = median_to_letter;
