'use strict';
var even_group_calculate_average = function (collection) {
  let evenNumber = false;
  let evenArry = _.chain(collection)
    .filter((item, index, items)=>(index + 1) % 2 == 0)
    .value();

  let haveEven = _.chain(evenArry)
    .find(n => n % 2 === 0)
    .value();

  if(haveEven){
    let sort = _.chain(evenArry)
      .sortBy()
  }
  return 0;


};
module.exports = even_group_calculate_average;
