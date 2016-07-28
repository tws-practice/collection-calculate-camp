'use strict';
let _=require('lodash');
function median_to_letter(collection) {

  let length=collection.length;
  if(length%2===1){
    return _chain(collection)
      .slice(0,Meth.ceil(length/2))
      .drop(Meth.ceil(length/2)-1)
      .value();
  }
}

module.exports = median_to_letter;
