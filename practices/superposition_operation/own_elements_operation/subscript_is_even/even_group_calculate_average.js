'use strict';
let _=require('lodash');
var even_group_calculate_average = function(collection){
  let indexEven=_
    .chain(collection)
    .filter(function(element,index){
      if(index%2===1){
        return element;
      }
    })
    .filter(function(element){
      return element%2===0;
    })
    .value();
  let a=_.chain(indexEven)
    .filter(function(element){
      return element<10;
    })
    .mean()
    .value();
  let b=_.chain(indexEven)
    .filter(function(element){
      return element>9&&element<100;
    })
    .mean()
    .value();
  let c=_.chain(indexEven)
    .filter(function(element){
      return element>99&&element<1000;
    })
    .mean()
    .value();
  let result=0;
  if(indexEven.length===0){
    result=_.concat(0);
  }else if(!a&&!b&&c){
    result=_.concat(c);
  }else{
    result=_.concat(a,b,c);
  }
  return result;
};
module.exports = even_group_calculate_average;
