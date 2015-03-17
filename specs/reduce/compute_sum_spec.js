'use strict';

var compute_elements_sum = require("../../practices/reduce/compute_sum.js");

describe('compute_elements_sum', function() {

  var collection_a = [1, 2, 3, 4, 5];

  it('计算给定集合元素的总和', function() {
    var result = compute_elements_sum(collection_a);

    expect(result).toEqual(15);
  });
});
