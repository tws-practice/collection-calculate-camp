'use strict';
let _=require('lodash');
var even_group_calculate_average = function(collection){

    let evenArray=_.chain(collection)
        .filter((element)=>{
            return collection.indexOf(element)%2!==0;
        })
        .filter(element=>{
            if(element%2==0)return element
             else return 0;})
        .value();

     let hasOne=_.remove(evenArray,(element)=>{
         return element/10<1;
    });
    let hasTwo=_.remove(evenArray,(element)=>{
        return element/10<10;
    });
     let meanArray=[];
       meanArray.push(_.mean(hasOne));
       meanArray.push(_.mean(hasTwo));
       meanArray.push(_.mean(evenArray));
    return  meanArray;

};
module.exports = even_group_calculate_average;
