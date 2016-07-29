'use strict';
let _ = require('lodash');
function average_uneven(collection) {

  //在这里写入代码
  return _(collection)
    .filter(x=>x % 2 === 1)
    .mean()
}

module.exports = average_uneven;
