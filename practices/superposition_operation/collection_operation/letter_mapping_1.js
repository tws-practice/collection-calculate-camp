'use strict';
let _=require('lodash');
var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even_to_letter(collection) {
  return _.chain(collection)
    .map((element)=> {
      return _.toString(element + 96);
    })
    .map((temp)=> {
      return String.fromCharCode(temp);
    })
    .filter((element, index)=> {
      if (index % 2 == 1) {
        return element;
      }
    })
    .value();
}

module.exports = even_to_letter;
