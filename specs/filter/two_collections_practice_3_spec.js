'use strict';

var choose_divisible_integer = require();

describe('choose_divisible_integer', function() {

  var collection_a = [4,9,25,16,21,64,32,35];
  var collection_b = [2,3,5];

  it('选出A集合中可以被B集合中整除的数', function() {
    var result = choose_divisible_integer(collection_a, collection_b);

    expect(result).toEqual([])
  })

})
