'use strict';
let _=require('lodash');
var even_group_calculate_average = function (collection) {
  let result = _.chain(collection)
    .filter((element, index)=> {
      if (element % 2 === 0 && index % 2 !== 0)
        return element;
    })
    .value();
  //console.log(result);
  if (result.length === 0) {
    result.push(0);
    //console.log(result);
  }
  else if (_.every(result, (element)=>element > 99)) {
    //console.log(_.mean(result));
    let number= _.mean(result);
    return _.concat([],number);
  }
  let arr = [];
  if (_.some(result, (element)=>element < 9)) {
    let a = _.chain(result)
      .filter((element)=>element < 10)
      .mean()
      .value();
    arr.push(a);
  }
  if (_.some(result, (element)=>element < 99 && element > 9)) {
    let b = _.chain(result)
      .filter((element)=>element < 99 && element > 9)
      .mean()
      .value();
    arr.push(b);
  }
  if (_.some(result, (element)=>element > 99)) {
    let c = _.chain(result)
      .filter((element)=>element > 99)
      .mean()
      .value();
    arr.push(c);
  }
  return arr;
  //console.log(arr);
};
module.exports = even_group_calculate_average;
