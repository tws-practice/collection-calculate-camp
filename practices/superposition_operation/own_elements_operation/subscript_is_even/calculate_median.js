'use strict';
let _ =require('lodash')
var calculate_median = function(collection){

  let line = _.chain(collection)
    .filter((item,index)=>index%2!==0)
    .value();



  if(line.length%2!==0){
      return line[parseInt(line.length/2)];
  }
    if(line.length%2===0){
      return (line[line.length/2]+line[line.length/2-1])/2;
    }
};
module.exports = calculate_median;
