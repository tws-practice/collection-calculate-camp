'use strict';

var get_integer_interval = require('../../practices/reduce/get_integer_interval_spec.js');

describe('get_integer_interval', function () {

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [5, 4, 3, 2, 1];

  it('', function() {

    var result = get_integer_interval(1, 5);
    expect(result).toEqual(collection);
  });

  it('选出给定数字集合元素的最大值', function() {

    var result = get_integer_interval(1, 5);
    expect(result).toEqual(collection);
  });
});
