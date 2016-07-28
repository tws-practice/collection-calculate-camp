'use strict';
let _=require('lodash');
function median_to_letter(collection) {
  //let result;
  let length = collection.length;
  let result = length % 2 !== 0 ? collection[(length - 1) / 2] :
    _.chain(collection)
      .sort()
      .mean([collection[(length / 2 - 1)], collection[length / 2]])
      .ceil()
      .value();
  //console.log(result);
  let arr = [];
  if (result > 26) {
    let element = _.floor(result / 26);
    arr.push(element);
    result -= 26;
  }
  arr.push(result);
  //console.log(arr);
  let a = _.map(arr, (element)=> {
    return String.fromCharCode(element + 96);
  });
  return a.join('');
}

module.exports = median_to_letter;
