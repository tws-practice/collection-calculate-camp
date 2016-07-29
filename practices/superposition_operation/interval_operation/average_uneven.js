'use strict';
// var collection = [1,2,3,4,5,6,7,8,9,10];
let _=require('lodash');
function average_uneven(collection) {
  let a =_.chain(collection)
    .filter((element) =>{
      if(element %2!==0)
        return element;
    })
    //     .sum((element)=>element)
    .mean((element)=>element)
    .value();
  return a;
}
// average_uneven(collection);
module.exports = average_uneven;
