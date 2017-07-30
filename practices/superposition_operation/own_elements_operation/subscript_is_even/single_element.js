'use strict';
let _ = require('lodash')
function compare(array,num){
  return array.find((arr) => arr === num);
}
var single_element = function(collection){
  return _(collection).filter((x,index)=> index%2 === 1).reduce((result,element) => {
  let temp = compare(result,element);
  if(temp === undefined){
    result.push(element);
  }else{
    let a =_.without(result,element);
    console.log(a)
  }
    return result;
},[])
};
var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
console.log(single_element(collection_a))
module.exports = single_element;
