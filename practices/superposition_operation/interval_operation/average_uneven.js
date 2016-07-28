'use strict';
let _=require('lodash');
function average_uneven(collection) {
  let uneven = _(collection)
    .filter(x=>x % 2 !== 0)
    .value();
  let sum = _.sum(uneven);
  return sum /uneven.length;
  //在这里写入代码
}

module.exports = average_uneven;
