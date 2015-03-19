'use strict';

var amount_even = require("../../../practices/superposition_operation/interval_operation/amount_even.js");

describe('amount_even', function() {

  var collection = [1,2,3,4,5,6,7,8,9,10];

  it('1-10的偶数算总数', function() {

    var result = amount_even(collection);

    expect(result).toEqual(30);
  })
});
