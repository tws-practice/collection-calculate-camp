'use strict';
let _=require('lodash');
function even_to_letter(collection) {
  //let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let even = _.chain(collection)
    .filter((element)=> {
      return element % 2 === 0;
    }).map((element)=> {
      return String.fromCharCode(element + 96);
    }).value();
  return even;
}

module.exports = even_to_letter;
