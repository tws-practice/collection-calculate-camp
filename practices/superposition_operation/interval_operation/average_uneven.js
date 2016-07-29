'use strict';
let _ = require('lodash');
function average_uneven(collection) {
 let average= _.mean(_(collection)
    .filter(x=>x % 2 !== 0)
    .value()
)
return average


}



module.exports = average_uneven;
