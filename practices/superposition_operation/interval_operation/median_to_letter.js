'use strict';
let _ = require('lodash');
function median_to_letter(collection) {
  let value = _.chain(collection)
    .sort()
    .filter((item, index, items)=> {
      var num = index * 2 - items.length;
      return num == 0 || num === -1 || num === -2
    })
    .sum();
  let med = _.ceil(value/2);//37 中位数
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
  //return value;
}

module.exports = median_to_letter;
