'use strict';
let _ = require('lodash');
var single_element = function(collection){
 return   _.chain(collection).filter((element,index) => {
   if(index % 2 != 0){
     return element;
   }
 }).uniq().splice(1).value();
};

module.exports = single_element;

