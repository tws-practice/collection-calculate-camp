'use strict';
let _ =require("lodash");
var is_exist_element = function(collection,element){
  let a = _.chain(collection).filter((item,index,items) =>{
    return index%2 ===0
  }).filter((item,index) => {
    if(item === element){ return true;}
    else { return false; }
  }).value();

  if(a[0]===element){ return true;}
  else{  return false; }
};

module.exports = is_exist_element;

