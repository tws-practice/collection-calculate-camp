'use strict';
let _= require('lodash')
var calculate_median = function(collection){
  let middle = 0;
let newCollection =_.chain(collection).filter(element =>collection.indexOf(element)%2 !== 0)
                                      .sort()
                                      .filter((item,index,items)=>{
  let number = index*2 - items.length;
  return number === 0 || number === -2 || number === -1
}).value();
  if(newCollection.length >1){
    middle = _.ceil(_.sum(newCollection)/2);
  }else{
    middle = newCollection[0];
  }
return middle;
}
module.exports = calculate_median;
