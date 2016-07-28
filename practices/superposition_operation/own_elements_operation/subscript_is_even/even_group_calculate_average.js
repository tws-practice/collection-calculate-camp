'use strict';
var even_group_calculate_average = function(collection){
  let temps=_.chain(collection)
    .filter(item=>collection.indexOf(item)%2!=0)
    .filter(item=>item%2===0)

};
module.exports = even_group_calculate_average;
