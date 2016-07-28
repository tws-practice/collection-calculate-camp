'use strict';
let _=require('lodash');
function median_to_letter(collection) {
    // let middle;
    // if(collection.length%2==0){
    //     middle=_.ceil((collection[collection.length/2]+collection[collection.length/2-1])/2);
    // }
    // if(collection.length%2!==0){
    //      middle=_.ceil(collection[collection.length/2]);
    // }
    let middleArray=[];
    let middleSum=_.chain(collection)
        .sort()
        .filter((item,index,items)=>{
            let number=index*2-items.length;
               return number===-1||number==0||number===-2
        })
        .sum()
        .value();

    let middle=_.ceil(middleSum/2);
    while(middle){

        middleArray.push(middle%26);
        middle=_.floor(middle/26);
        if(middle<26){
            middleArray.push(middle);
            break;
        }
    }

    return _(middleArray)
        .map(x=>x-1)
        .map(x=>"a".charCodeAt(0)+x)
        .map(x=>String.fromCharCode(x))
        .reverse()
        .join('')
}
module.exports = median_to_letter;
