'use strict';
let _ = require('lodash');
function hybrid_operation(collection) {
  //在这里写入代码
  // let res = collection.map(temp=>{return temp*3+2});
  // return _.reduce(res,(sum,n)=>{return sum+n;});
  return _(collection)
    .map(x=>x*3+2)
    .reduce((sum,n)=>{return sum+n});
}

module.exports = hybrid_operation;

