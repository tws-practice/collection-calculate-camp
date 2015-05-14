'use strict';
var map_to_even = require("../../practices/map/map_to_even.js");

describe('map to even', function() {

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [2, 4, 6, 8, 10];

  it("将集合A中得元素映射成集合B中的元素", function() {

    var result = map_to_even(collection_a);
    expect(result).toEqual(collection_b);
  });
});
