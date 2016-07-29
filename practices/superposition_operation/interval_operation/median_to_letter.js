
'use strict';
let _ = require("lodash");
function median_to_letter(collection) {
  let middle=_.chain(collection)
    .sort()
    .filter((item,index,items)=>{
      var number=index*2-items.length;
      return number===0||number===-1|number===-2;
    })
    .sum()
    .value();
  middle=_.ceil(middle/2);
  console.log(middle);
  let result=[];
  result.push(middle%26);
  do{
    middle=middle/26;
    result.push(parseInt(middle%26));

  }while(middle>26);
//   console.log(result);
  let chars=_.chain(result)
    .map(x=>x-1)
    .map(x=>"a".charCodeAt(0)+x)
    .map(x=>String.fromCharCode(x))
    .reverse()
    .join("")
    .value();
  return chars;
  // console.log(chars);
}
// median_to_letter(ollection);

module.exports = median_to_letter;
