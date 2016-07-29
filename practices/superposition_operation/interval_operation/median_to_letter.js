'use strict';
let _ =require('lodash');
function median_to_letter(collection) {
  collection.sort();
  let midNumber=0;
  if (collection.length % 2 !== 0) {
     midNumber = collection[parseInt(collection.length / 2)];
  }
  if (collection.length % 2 === 0) {
     midNumber = _.ceil((collection[(collection.length / 2)] + collection[collection.length / 2 - 1]) / 2);
  }
  let a = parseInt(midNumber / 26);
  let b = midNumber % 26;
  let string1=String.fromCharCode(a+ 96);
  let string2=String.fromCharCode(b+96);
  return string1+string2;
}

module.exports = median_to_letter;
