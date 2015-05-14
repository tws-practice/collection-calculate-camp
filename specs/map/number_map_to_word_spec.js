'use strict';
var number_map_to_word = require('../../practices/map/number_map_to_word.js');

describe('number map to word', function() {
  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = ['a', 'b', 'c', 'd', 'e'];

  it('数字映射为字母', function() {
    var result = number_map_to_word(collection_a);
    expect(result).toEqual(collection_b);
  });
});
