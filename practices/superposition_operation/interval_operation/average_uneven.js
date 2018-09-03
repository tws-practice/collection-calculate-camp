'use strict';
let _ = require('lodash');
function average_uneven(collection) {
  return _.mean(_(collection)
    .filter(x=>x % 2 !== 0)
    .value()
)


}



module.exports = average_uneven;
