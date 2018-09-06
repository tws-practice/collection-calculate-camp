'use strict';
let _ = require("lodash");
function average_uneven(collection) {
  return _.chain(collection)
    .filter(x=>x % 2 != 0)
    .mean()
    .value();
  //在这里写入代码
}

module.exports = average_uneven;
