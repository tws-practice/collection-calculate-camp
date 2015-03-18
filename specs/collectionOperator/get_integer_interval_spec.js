'use strict';

var get_integer_interval = require('../../practices/collectionOperator/get_integer_interval.js');

describe('get_integer_interval', function () {

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [5, 4, 3, 2, 1];

  it('根据给出的两个数字得到一个自增1的数字区间', function() {

    var result = get_integer_interval(1, 5);
    expect(result).toEqual(collection_a);
  });

  it('根据给出的两个数字得到一个自减1的数字区间', function() {

    var result = get_integer_interval(5, 1);
    expect(result).toEqual(collection_b);
  });

  it('给定两个相同的数字得到只含此数字的数组', function() {

    var result = get_integer_interval(5, 5);
    expect(result).toEqual([5]);
  });
});
