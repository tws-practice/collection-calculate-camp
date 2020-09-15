'use strict';
let _ = require("lodash");
var calculate_average = function(collection_a){
    let number = _.chain(collection_a).filter((index) =>{
         let number = index %2;
         return number === 0;
    }).mean().value();
   return number;

};

module.exports = calculate_average;
