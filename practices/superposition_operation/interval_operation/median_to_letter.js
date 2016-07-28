'use strict';
let _=require('lodash');
function median_to_letter(collection) {
  let length=collection.length;
  let result=_.chain(collection)
      .drop(Math.ceil(length/2)-1)
      .dropRight(Math.ceil(length/2)-1)
      .value();
  if(result.length>1){
    result=_.chain(result)
      .mean()
      .ceil(0)
      .value();
  }
  // let shiwei=parseInt(result/26);
  let gewei=result%26;
  let count=0;
  while(result>26){

      result=parseInt(result/26);
      count+=1;
  }

}

module.exports = median_to_letter;
