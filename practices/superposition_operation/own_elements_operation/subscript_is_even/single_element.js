'use strict';
let _=require("lodash");
var single_element = function(collection){
  let arr= _.chain(collection)
    .filter((item,index,items)=>{
      if(index%2!=0)
        return item;
    })
    .sort((value1,value2)=>{return value1-value2;})
    .value();
    return Array.from(new Set(arr));
};
module.exports = single_element;
