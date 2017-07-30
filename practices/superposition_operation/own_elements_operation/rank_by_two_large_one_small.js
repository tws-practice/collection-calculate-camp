'use strict';
let _ = require('lodash')
function rank_by_two_large_one_small(collection){
 let result = _.chain(collection).sort((x,y)=>x-y).chunk(3).map(item => {
   if(item.length > 2){
     let temp = item[0];
     item[0] = item[1];
     item[1] = item[2];
     item[2] = temp;
   }
   return item;
   }

   .value();

  return result
}
var collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
console.log(rank_by_two_large_one_small(collection_a))
module.exports = rank_by_two_large_one_small;
