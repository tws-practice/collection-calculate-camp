'use strict';
let _ = require('lodash')
function median_to_letter(collection) {
  let result = [];
  let middle  = _.chain(collection)
   .sort()
   .filter((item,index,items)=>{
     var num = index*2-items.length;
    return num==-2||num==-1||num==0;
  })
   .mean()
    .ceil()
    .value();
  while (middle) {
    result.push(middle % 26);
   middle = _.floor(middle / 26);
    if (middle < 26) {
      result.push(middle);
     break;
  }
 }
  return result.map(x => String.fromCharCode('a'.charCodeAt()-1 + x))
    .reverse().join('');
  }
module.exports = median_to_letter;
