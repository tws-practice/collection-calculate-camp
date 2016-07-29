'use strict';
let _ = require('lodash');
var even_asc_odd_desc = function(collection){
  let even =  _.orderBy(collection).filter(x => x%2===0);
  let odd =   _.orderBy(collection).reverse().filter(x => x%2 ===1);
  return _.concat([],even,odd);

};
module.exports = even_asc_odd_desc;
