'use strict';
let _=require('lodash');
var single_element = function(collection){

    return _.chain(collection)
        .filter(function(element,index){
            if(index%2===1){
                return element;
            }
        })
      //.uniqBy()
           //.without()
           .value();
    };
module.exports = single_element;
