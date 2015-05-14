'use strict';

var get_union = require('../../practices/collectionOperator/get_union.js');

describe('get_union', function () {

  var collection_a = [10, 27, 28, 19, 5];
  var collection_b = [5, 78, 28, 19, 23];
  var collection_c = [10, 27, 28, 19, 5, 78, 23];

  it('弹出两个集合的交集', function() {

    var result = get_union(collection_a, collection_b);
    expect(result).toEqual(collection_c);
  });
});
