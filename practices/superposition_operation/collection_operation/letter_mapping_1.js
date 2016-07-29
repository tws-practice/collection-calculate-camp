'use strict';
let _ = require("lodash");
function even_to_letter(collection) {
  // let letter= ['a','b','c','d','e','f','g','h','i','j'];
  // let n =_.map(letter,(element) =>{
  //   let number = _.indexOf(letter,element);
  //   if((number+1)%2 === 0){ return {name:element,id:number+1}}
  //   else{ return{name:element,id:0}}
  // });
  // let m =_.filter(n,(element)=>element.id !== 0);
  // let result = _.map(m,(element)=>{ return element.name });
  // console.log(result);
  let result = _(collection).filter(x =>x%2 ===0).map(x => x-1).map(x =>
  "a".charCodeAt(0) +x).map(x => String.fromCharCode(x)).value();
  return result;
}

module.exports = even_to_letter;
