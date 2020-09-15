'use strict';
let _ = require("lodash");
var even_group_calculate_average = function(collection){
  let getArray = _.chain(collection).filter((item,index)=>{
    return (index+1)%2===0
  }).filter((item,index)=>{ return item%2 ===0 }).value();
  // console.log(getArray);

  if(getArray.length === 0){
    getArray[0] =0;
    return getArray;
  }
  else{
    let count =_.chain(getArray).map((element) =>{
      return _.toString(element)}).value();

    let one = _.chain(count).filter((item,index) =>{
      return item.length === 1}).map((element) => {
      return _.parseInt(element)}).mean().value();
    console.log(one);

    let two = _.chain(count).filter((item,index) =>{
      return item.length === 2}).map((element) => {
      return _.parseInt(element)}).mean().value();
    console.log(two);

    let three = _.chain(count).filter((item,index) =>{
      return item.length === 3}).map((element) => {
      return _.parseInt(element)}).mean().value();
    console.log(three);

    let result =[one,two,three];
    let last = _.compact(result);
     return last;
  }


};
module.exports = even_group_calculate_average;
