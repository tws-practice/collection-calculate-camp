'use strict';
var even_group_calculate_average = function (collection) {
  let result = [];
  let a = _.chain(collection)
    .filter((element, index)=> {
      if (index % 2 === 1) {
        return element;
      }
    })
    .filter((element)=> element % 2 === 0)
    .value();

  let b = _.chain(a)
    .filter((element)=> element < 10)
    .mean()
    .value();
  result.push(b);
  let c = _.chain(a)
    .filter((element)=> element > 9 && element < 100)
    .mean()
    .value();
  result.push(c);
  let d = _.chain(a)
    .filter((element)=> element > 99 && element < 1000)
    .mean()
    .value();
  result.push(d);
  console.log(result);
};
module.exports = even_group_calculate_average;
