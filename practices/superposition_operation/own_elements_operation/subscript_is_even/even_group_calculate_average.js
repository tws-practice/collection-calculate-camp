'use strict';
let _ = require('lodash');
var even_group_calculate_average = function (collection) {
  let line = _.chain(collection)
    .filter((item, index)=> (index % 2 !== 0)
    )
    .filter((item)=>item % 2 == 0)
    .value();

  if (line.length === 0) {
    line.push(0);
    return line;
  }
  else {
    let lines = [];
    let element1 = [];
    let element2 = [];
    let element3 = [];
    line.map((even)=> {
      if (even / 10 < 1) {
        element1.push(even);
      }
      if (even / 10 >= 1 && even / 10 < 10) {
        element2.push(even);
      }
      if (even / 10 >= 10 && even / 10 < 100) {
        element3.push(even);
      }
    })
    let a = _.mean(element1);
    let b = _.mean(element2);
    let c = _.mean(element3);
    if(element1.length==0&&element2.length==0){
      lines.push(c);
      return lines;
    }
    else {
      lines.push(a, b, c);
      return lines;
    }
  }

};
module.exports = even_group_calculate_average;
