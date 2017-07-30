'use strict';
let _=require('lodash');
var even_asc_odd_desc = function(collection){
let even=
     _.chain(collection)
        .filter(x=>x%2==0)
        // .sort((n1,n2)=>{return n1-n2;})
        .sortBy()
        .value();

    let odd=
    _.chain(collection)
        .filter(x=>x%2==1)
      //  .sort((n1,n2)=>{return n2-n1;})
      .sortBy()
      .reverse()
       .value();

    return _.concat(even,odd);
};
module.exports = even_asc_odd_desc;
