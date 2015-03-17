'use strict';

var compute_median = require('../../practices/reduce/compute_median.js');

describe('compute_median', function () {
  var collection_a = [1, 1, 1, 2, 3];
  var collection_b = [1, 1, 2, 3];

  it('计算给定奇数数字集合的中位数', function () {

    var result = compute_median(collection_a);
    expect(result).toEqual(1);
  });

  it('计算给定偶数数字集合的中位数', function () {

    var result = compute_median(collection_);
    expect(result).toEqual(1.5);
  })
});
