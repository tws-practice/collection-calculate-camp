'use strict';
let _=require('lodash');
function even_to_letter(collection) {
  return _
    .chain(collection)
    .filter(function(n){
      return n%2===0;
    })
    .map(function(n) {
      return String.fromCharCode(n+96);
    })
    .value();
}
module.exports = even_to_letter;
