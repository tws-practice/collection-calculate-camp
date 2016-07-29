'use strict';
let _ = require('lodash');
function median_to_letter(collection) {

  //在这里写入代码
  let result = [];

  let middle = _.chain(collection)
    .sort()
    .filter((item, index, items)=> {
      var num = index * 2 - items.length;
      return num == -2 || num == -1 || num == 0;
    })
    .mean()
    .ceil();

  while (middle) {
    result.push(middle % 26);
    middle = _.floor(middle / 26);
    if (middle < 26) {
      result.push(middle);
      break;
    }
  }
  return _(result)
    .map(x=>x - 1)
    .map(x=>'a'.charCodeAt(0) + x)
    .map(x=>String.fromCharCode(x))
    .reverse()
    .join("");
}

module.exports = median_to_letter;
