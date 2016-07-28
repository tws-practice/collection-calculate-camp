'use strict';
let _ = require('lodash')
function median_to_letter(collection) {
  let middle = 0;
  let tem = 0;
  if(collection.length %2 === 0){
    tem = collection[collection.length/2]+collection[collection.length/2-1];
    middle = _.ceil(tem/2);
  }else{
    middle = _.ceil(collection(collection.length/2)/2);
  }
  let letters = [];
  while(middle){
    if(middle < 26){
      letters.push(middle);
      break;
    }
    let middle1 = middle % 26;
    letters.push(middle1);
    middle = _.floor(middle/26);
    }
  return letters.map(x => String.fromCharCode('a'.charCodeAt()-1 + x))
    .reverse().join('');
  }


let collection = [20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46,47,48,49,
  50,51,52,53];
console.log(median_to_letter(collection))
module.exports = median_to_letter;
