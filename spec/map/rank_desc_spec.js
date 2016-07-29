'use strict';
var rank_desc = require('../../practices/map/rank_desc.js');

describe('rank by desc', function() {
  var collection_a = [3, 2, 4, 5, 6];
  var collection_b = [2, 3, 4, 5, 6];

  it('从小到大排序', function() {
    var result = rank_desc(collection_a);
    expect(result).toEqual(collection_b);
  });
});
