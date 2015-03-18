'use strict';

var choose_common_elements = require("../../practices/filter/two_collections_practice_1.js");

describe('choose_common_elements', function() {

  var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collection_b = ["a", "d", "e", "f"];

  it("选出A集合中与B集合中的共有元素", function () {
    var result = choose_common_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
  })
});
