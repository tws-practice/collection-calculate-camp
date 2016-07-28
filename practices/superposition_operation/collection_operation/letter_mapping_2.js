'use strict';
let _=require('lodash');
function average_to_letter(collection) {
  var sum= _
    .chain(collection)
    .reduce(function (result,n) {
      return result+n;
    })
    .value();
  return String.fromCharCode((Math.ceil(sum/collection.length))+96);

}
module.exports = average_to_letter;

