'use strict';
var map_to_three_multiples = require('../../practices/map/map_to_three_multiples.js');

describe('map to three multiples',function(){
  var collection_a = [1,2,3,4];
  var collection_b = [3,6,9,12];

  it('三倍映射',function(){
    var result = map_to_three_multiples(collection_a);
    expect(result).toEqual(collection_b);
  });
});
