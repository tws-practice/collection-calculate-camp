'use strict';
let _ = require('lodash');
var even_group_calculate_average = function(collection){
  let a =  _.chain(collection).filter((element,index) =>{
    if(index %2 !==0){
      return index;
    }
  }).filter(x => x%2===0).value();
  if(a.length != 0) {
    let one = _.chain(a).filter(x => x < 10).mean().value();
    let two = _.chain(a).filter(x => x >= 10 && x < 100).mean().value();
    let three = _.chain(a).filter(x => x >= 100).mean().value();
    return _.compact(_.concat([],one,two,three));
  }else return [0];
};
module.exports = even_group_calculate_average;
