'use strict';
let _=require('lodash');
function collect_all_even(collection) {
  //let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let even = _.chain(collection)
    .filter((element)=> {
      return element % 2 === 0;}).value();
  //console.log(even);
  return even;
}
module.exports = collect_all_even;
