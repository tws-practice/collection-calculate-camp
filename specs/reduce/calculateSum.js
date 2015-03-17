'use strict';

var calculate_elements_sum = require("../../practices/reduce/calculateSum.js");

describe('practice-1-1', function() {

  var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collection_b = ["a", "d", "e", "f"];

  it("选出A集合中与B集合中相同的元素", function() {
    var result = collect_same_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
});

/**
 * Created by zhzhang on 3/17/15.
 */
