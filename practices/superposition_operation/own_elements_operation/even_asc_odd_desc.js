'use strict';
let _=require('lodash');
var even_asc_odd_desc = function(collection){
  let even=_
    .chain(collection)
    .filter(function(element){
      return element%2===0;
    })
    .sort(function(n1,n2){
      return n1-n2;
    })
    .value();
  let sec=_
    .chain(collection)
    .filter(function(element){
      return element%2===1;
    })
    .sort(function(n1,n2){
      return n2-n1;
    })
    .value();
  return _.concat(even,sec);
};
module.exports = even_asc_odd_desc;
