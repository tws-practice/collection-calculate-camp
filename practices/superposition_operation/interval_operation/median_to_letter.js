'use strict';
let _ = require('lodash');
function median_to_letter(collection) {
  let med = _.chain(collection)
    .sortBy()
    .filter((item, index, items)=> {
      var num = index * 2 - items.length;
      return num == 0 || num === -1 || num === -2
    })
    .mean()
    .ceil()
    .value()
  let result = [];
  while(med){
    result.push(med%26);
    if(med/26 < 26){
      result.push(_.floor(med/26));
      break;
    }
  }
  return _(result)
    .map(x => x - 1)
    .map(x => 'a'.charCodeAt(0) + x)
    .map(x => String.fromCharCode(x))
    .reverse()
    .join('');
}

module.exports = median_to_letter;
