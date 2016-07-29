'use strict';
let _ = require('lodash')
function amount_even(collection) {
return _.sum (_(collection)
  .filter(x=>x%2===0)
  .value()
)


  //在这里写入代码
}

module.exports = amount_even;
