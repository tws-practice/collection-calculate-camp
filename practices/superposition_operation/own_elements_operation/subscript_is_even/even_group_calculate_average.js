'use strict';
let _ = require('lodash');
var even_group_calculate_average = function (collection) {
  let value = _.chain(collection)
    .filter((item, index, items)=> {
      return index % 2 === 1;
    })
    .filter((item, index, items)=> {
      return item % 2 === 0;
    })
    .value();
  if (value.length !== 0) {
    let one = _.chain(value)
      .filter((item)=> {
        return item < 10;
      })
      .mean()
      .value();
    let ten = _.chain(value)
      .filter((item)=> {
        return item >= 10 && item < 100;
      })
      .mean()
      .value();
    let husand = _.chain(value)
      .filter((item)=> {
        return item >= 100;
      })
      .mean()
      .value();
    return _.compact(_.concat([], one, ten, husand));
  }else{
    return [0];
  }
};
module.exports = even_group_calculate_average;
