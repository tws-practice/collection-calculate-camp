'use strict';
var map_to_three_multiples = require('../../practices/map/map_to_three_multiples.js');

describe('map to three multiples', function() {
  var collection_a = [1, 3, 5, 4, 9];
  var collection_b = [3, 9, 15, 12, 27];

  it('三倍映射', function() {
    var result = map_to_three_multiples(collection_a);
    expect(result).toEqual(collection_b);
  });
});
