'use strict';
let _ =require('lodash')
var single_element = function(collection){
let a= _.chain(collection)
  .filter((item,index)=>{
    if(index%2!==0){
      return item;
    }
  }).value();
  let aa=[];
  let ace ={};
  a.map((item,index,array)=>{
    if (array.lastIndexOf(item)===index)
      aa.push(item);
  })

  return aa;
};
module.exports = single_element;
