'use strict';
let _ = require('lodash')
var even_asc_odd_desc = function(collection){
 let odds =_.chain(collection).filter(x => x%2 === 0).sort((x,y)=>x-y).value();
  let evens = _.chain(collection).filter(x => x%2 === 1).sort((x,y)=>y-x).value();
return _.concat(odds,evens);
};
var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
console.log(even_asc_odd_desc(collection_a))
module.exports = even_asc_odd_desc;
