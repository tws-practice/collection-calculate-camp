'use strict';
let _ =require('lodash');
/* var collection = [1,2,3,4,5,6,7,8,9,10];*/
function average_uneven(collection) {
  let a =_.chain(collection)
    .filter((element) =>{
      if(element %2==0)
        return element;
    })
    .sum((element)=>element)
    .value();
 return a;
}
module.exports = average_uneven;
