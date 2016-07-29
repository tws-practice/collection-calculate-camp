'use strict';
let _=require("lodash");
// var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function average_to_letter(collection) {
  let b = _.chain(collection)
    .mean((element)=> element)
    .ceil((element)=> element);
  let a = String.fromCharCode(b + 96);
 return  a;
}
module.exports =average_to_letter;
