'use strict';

var collect_max_number = require('../../practices/reduce/collect_max_number.js');

describe('collect_max_number', function () {

  var collection = [1, 2, 3, 4, 5];

  it('选出给定数字集合元素的最大值', function() {

    var result = collect_max_number(collection);
    expect(result).toEqual(5);
  });
});
