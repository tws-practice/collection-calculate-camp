'use strict';
let _=require('lodash');
function one_add_next_multiply_three(collection){
  let a=_.chain(collection)
    .dropRight(1)
    .value();
  let b=_.chain(collection)
    .drop(1)
    .value();

}
module.exports = one_add_next_multiply_three;
