'use strict';
var map_to_four_multiples_add_one = require('../../practices/map/map_to_four_multiples_add_one.js');

describe('map_to_four_multiples_add_one', function() {

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [5, 9, 13, 17, 21];

  it('四倍加一', function() {
    var result = map_to_four_multiples_add_one(collection_a);
    expect(result).toEqual(collection_b);
  });
});
