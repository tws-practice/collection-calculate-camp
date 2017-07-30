'use strict';
let _=require('lodash');
var calculate_median = function(collection){
  let middleArray=_.chain(collection)
      .filter((item,index,items)=>{
        if(index%2!==0) return item;
     })
      .sort()
        .filter((item,index,items)=>{
        let number=index*2-items.length;
        return (number===-1||number===0||number===-2);
    }).value();

    if(middleArray.length==2) return _.ceil(_.sum(middleArray)/2);
    else return middleArray[0];
}
module.exports = calculate_median;
