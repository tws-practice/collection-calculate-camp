'use strict';

var compare_collections = require('../../practices/reduce/compare_collections.js');

describe('compare_collections', function() {

  var collection_a = [1,11,27,20,4,9,15];
  var collection_b = [1,11,27,20,4,9,15];

  it('判断两个集合是否相同', function() {
    var result = compare_collections(collection_a, collection_b);

    expect(result).toEqual(true);
  });
});
