describe("appendToString", function () {
  it("returns_a_string_with_appended_characters", function () {
    // Failure message:
    // Make sure you return a new string with the new characters appended to the original string
    expect(appendToString("Hello", " World!")).toBe("Hello World!")
    expect(appendToString("Foo", "bar")).toBe("Foobar")
    expect(appendToString("bar", "Foo")).toBe("barFoo")
    expect(appendToString("", "test")).toBe("test")
    expect(appendToString("other test", "")).toBe("other test")
  });
})
describe("prependToString", function () {

  it("adds_the_second_parameter_to_the_front_of_the_string", function () {
    // Failure message:
    // This test has no failure messages
    expect(prependToString('awesome', 'very')).toBe('veryawesome') //
    expect(prependToString('world', 'hello ')).toBe('hello world') //
    expect(prependToString('nothing', '')).toBe('nothing') //
  });
})
describe("charAt", function () {
  it("returns_the_character_at_an_index_or_an_empty_string", function () {
    // Failure message:
    // This test has no failure messages
    expect(charAt('awesome', 2)).toBe('e') // 'e'
    expect(charAt('awesome', 12)).toBe('') // ''
  });
})
describe("stringIncludes", function () {
  it("returns_true_if_the_value_is_in_the_array_otherwise_it_returns_false", function () {
    // Failure message:
    // This test has no failure messages
    expect(stringIncludes('awesome', 'e')).toBe(true); // true
    expect(stringIncludes('awesome', 'z')).toBe(false); // false
  });
})
describe("stringIndexOf", function () {

  it("returns_the_correct_index_or_negative_one", function () {
    // Failure message:
    // This test has no failure messages
    expect(stringIndexOf('awesome', 'e')).toBe(2) // 2
    expect(stringIndexOf('awesome', 'z')).toBe(-1) // -1
  });
})
describe("stringLastIndexOf", function () {

  it("returns_the_last_index_or_negative_one", function () {
    // Failure message:
    // This test has no failure messages
    expect(stringLastIndexOf('awesome', 'e')).toBe(6); // 6
    expect(stringLastIndexOf('awesome', 'z')).toBe(-1); // -1
  });

})
describe("repeat", function () {
  it("repeats_the_string_a_certain_number_of_times", function () {
    // Failure message:
    // This test has no failure messages
    expect(repeat('Matt', 3)).toBe('MattMattMatt') // 'MattMattMatt'
    expect(repeat('Elie', 2)).toBe('ElieElie') // 'ElieElie'
    expect(repeat('Tim', 0)).toBe('') // ''
  });
})
describe("removeFromString", function () {
  it("returns_a_new_string_with_characters_removed", function () {
    // Failure message:
    // This test has no failure messages
    expect(removeFromString('Elie', 2, 2)).toBe('El') // 'El'
    expect(removeFromString('Elie', 0, 1)).toBe('lie') // 'lie'
    expect(removeFromString('Rithm School', 0, 6)).toBe('School') // 'School'
    expect(removeFromString('Rithm School', 2, 4)).toBe('RiSchool') // 'RiSchool'
    expect(removeFromString('Rithm School', 6, 400)).toBe('Rithm ') // 'Rithm '
  });

})
describe("includes", function () {
  it("returns_true_if_the_value_is_in_the_array_otherwise_false", function () {
    // Failure message:
    // This test has no failure messages
    expect(includes([1, 2, 3, 4], 4)).toBe(true) // true
    expect(includes([1, 2, 3, 4], 14)).toBe(false) // false
    expect(includes([], 14)).toBe(false) // false
  });

  it("returns_true_if_the_value_is_in_the_string_otherwise_false", function () {
    // Failure message:
    // This test has no failure messages
    expect(includes('abcd', 'b')).toBe(true) // true
    expect(includes('abcd', 'e')).toBe(false) // false
    expect(includes('', 'a')).toBe(false) // false
    expect(includes('abcd', 'a', 2)).toBe(false) // false
  });

  it("returns_true_if_the_value_is_in_the_object_otherwise_false", function () {
    // Failure message:
    // This test has no failure messages
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toBe(true) // true
    expect(includes({ 'a': 1, 'b': 2 }, 'a')).toBe(false) // false
    expect(includes({}, 1)).toBe(false) // false
    expect(includes({'a': 1, 'b': 2}, 1, 2)).toBe(true) // true
  });
})

describe("indexOf", function () {
  it("returns_the_index_at_which_the_value_is_or_negative_1_if_not_found", function () {
    // Failure message:
    // This test has no failure messages
    var arr = [5, 10, 15, 20]
    expect(indexOf(arr, 20)).toBe(3) // 3

    var arr2 = [1, 2, 3, 4, 5]
    expect(indexOf(arr2, 2)).toBe(1) // 1

    var arr3 = [1, 2]
    expect(indexOf(arr3, 10)).toBe(-1) // -1
  });

})
describe("lastIndexOf", function () {
  it("returns_the_last_index_at_which_a_value_is_at_or_negative_one", function () {
    // Failure message:
    // This test has no failure messages
    expect(lastIndexOf([1, 2, 3, 4], 2)).toBe(1) // 1
    expect(lastIndexOf([1, 2, 3, 4, 2], 2)).toBe(4)
    expect(lastIndexOf([1, 2, 3, 4], 22)).toBe(-1) // -1
  });
})
describe("max", function () {

  it("returns_the_highest_number", function () {
    // Failure message:
    // This test has no failure messages
    expect(max([5, 1, 4, 7, 1, 2])).toBe(7)
    expect(max([-1, 6, 3, 2.2, -10, -4])).toBe(6)
    expect(max([3, 4, 12, 1, 8])).toBe(12)
  });
})
describe("min", function () {
  it("returns_the_lowest_value_in_an_array_of_numbers", function () {
    // Failure message:
    // This test has no failure messages
    expect(min([5, 1, 4, 7, 1, 2])).toBe(1) // 1
    expect(min([-1, 6, 3, 2.2, -10, -4])).toBe(-10) // -10
  });

})
describe("slice", function () {
  it("slices_from_the_second_to_third_parameter", function () {
    // Failure message:
    // This test has no failure messages
    expect(slice([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2])
    expect(slice([1, 2, 3, 4, 5], 2, 4)).toEqual([3, 4])
    expect(slice([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5])
    expect(slice([1, 2, 3, 4, 5], 2, 10)).toEqual([3, 4, 5])
  });
})
describe("countValues", function () {
  it("returns_the_number_of_times_a_value_appears_in_an_array", function () {
    // Failure message:
    // This test has no failure messages
    expect(countValues([4, 1, 4, 2, 3, 4, 4], 4)).toBe(4) // 4
    expect(countValues([4, 1, 4, 2, 3, 4, 4], 100)).toBe(0) // 0
    expect(countValues([], 1)).toBe(0) // 0
  });
})
describe("keys", function () {
  it("returns_an_array_of_keys_for_an_object", function () {
    // Failure message:
    // This test has no failure messages
    var obj = { a: 1, b: 2, c: 3 }
    expect(keys(obj)).toEqual(["a", "b", "c"])

    var obj2 = { first: "Matt", last: "Lane" }
    expect(keys(obj2)).toEqual(["first", "last"])

    var obj3 = {}
    expect(keys(obj3)).toEqual([])
  });
})
describe("values", function () {

  it("returns_an_array_of_all_the_values_in_the_object", function () {
    // Failure message:
    // make sure you return an array of the values
    var obj = { a: 1, b: 2, c: 3 }
    expect(values(obj)).toEqual([1, 2, 3]) //

    var obj2 = { first: "Matt", last: "Lane", isDogOwner: true }
    expect(values(obj2)).toEqual(["Matt", "Lane", true]) //

    var obj3 = {}
    expect(values(obj3)).toEqual([]) // []
  });
})
describe("squareEvenNumbers", function () {

  it("returns_the_sum_of_all_even_numbers_squared", function () {
    // Failure message:
    // This test has no failure messages
    expect(squareEvenNumbers([1, 2, 3, 4, 5])).toBe(20) // 20
    expect(squareEvenNumbers([1, 3, 5, 7])).toBe(0) // 0
    expect(squareEvenNumbers([5, 6, 7])).toBe(36) // 36
  });
})
describe("entries", function () {
  it("returns_an_array_of_arrays_with_keys_and_values", function () {
    // Failure message:
    // This test has no failure messages
    var obj = { a: 1, b: 2, c: 3 }
    expect(entries(obj)).toEqual([["a", 1], ["b", 2], ["c", 3]]) //

    var obj2 = { first: "Matt", last: "Lane", isDogOwner: true }
    expect(entries(obj2)).toEqual([["first", "Matt"], ["last", "Lane"], ["isDogOwner", true]]) //

    var obj3 = {}
    expect(entries(obj3)).toEqual([]) //
  });

})
describe("multiples", function () {
  it("returns_an_array_of_the_first_n_multiples_of_the_first_parameter", function () {
    // Failure message:
    // This test has no failure messages
    expect(multiples(3, 4)).toEqual([3, 6, 9, 12])
    expect(multiples(2, 5)).toEqual([2, 4, 6, 8, 10])
  });
})

describe("pluck", function () {
  it("returns an array of values for a given key", function(){
    expect(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], 'name')).toEqual(["Tim", "Matt", "Elie"])

    expect(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }], 'isBoatOwner')).toEqual([true, false, undefined])
  })
})
describe("twoHighest", function () {

  it("returns_the_two_highest", function () {
    // Failure message:
    // This test has no failure messages
    expect(twoHighest([1, 2, 10, 8])).toEqual([8, 10]); //
    expect(twoHighest([6, 1, 9, 10, 4])).toEqual([9, 10]); //
    expect(twoHighest([4, 25, 3, 20, 19, 5])).toEqual([20, 25]); //
    expect(twoHighest([1, 2, 2])).toEqual([2, 2]);
  });

})
describe("minMaxKeyInObject", function () {

  it("returns_an_array_with_the_min_and_max_keys_in_an_object", function () {
    // Failure message:
    // This test has no failure messages
    expect(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' })).toEqual([1, 10])
    expect(minMaxKeyInObject({ 1: "Elie", 4: "Matt", 2: "Tim" })).toEqual([1, 4])
  });

})
describe("stringFromObject", function () {
  it("returns_a_string_of_keys_and_values", function () {
    // Failure message:
    // This test has no failure messages
    expect(stringFromObject({ a: 1, b: '2' })).toBe("a = 1, b = 2") //
    expect(stringFromObject({ name: "Elie", job: "Instructor", isCatOwner: false })).toBe("name = Elie, job = Instructor, isCatOwner = false") //
    expect(stringFromObject({})).toBe("") // ""
  });

})
describe("countNumbers", function () {
  it("returns the number of valid number types", function () {
    expect(countNumbers(['a', 'b', '3', 'awesome', '4'])).toBe(2);
    expect(countNumbers(['32', '55', 'awesome', 'test', '100'])).toBe(3);
    expect(countNumbers([])).toBe(0);
    expect(countNumbers(['7', '12', 'a', '', '6', '8', ' '])).toBe(4);
  });
  it("handles the edge case that NaN is a typeof number", function () {
    expect(countNumbers(['4', '1', '0', 'NaN'])).toBe(3);
  });
})
describe("removeVowels", function () {
  it("should_remove_vowels", function () {
    // Failure message:
    // Make sure your function removes the vowels in a string.
    expect(removeVowels("Hello!")).toBe("Hll!")
    expect(removeVowels("Tomatoes")).toBe("Tmts")
    expect(removeVowels("Reverse Vowels In The String")).toBe("Rvrs Vwls n Th Strng")
    expect(removeVowels("aeiou")).toBe("")
    expect(removeVowels("why try, shy fly?")).toBe("why try, shy fly?")
  });

})
describe("findTheDuplicate", function () {

  it("returns_the_duplicate_or_undefined_if_there_are_no_dupes", function () {
    // Failure message:
    // This test has no failure messages
    expect(findTheDuplicate([1, 2, 1, 4, 3, 12])).toBe(1) // 1
    expect(findTheDuplicate([6, 1, 9, 5, 3, 4, 9])).toBe(9) // 9
    expect(findTheDuplicate([2, 1, 3, 4])).toBeUndefined // undefined
  });

})
describe("totalCaps", function () {

  it("returns_the_number_of_capital_letters_for_every_string_in_the_array", function () {
    // Failure message:
    // This test has no failure messages
    expect(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])).toBe(8) // 8
    expect(totalCaps(["Elie", "Matt", "Tim"])).toBe(3) // 3
    expect(totalCaps(["hello", "world"])).toBe(0) // 0
  });

})
describe("separate", function () {

  it("returns_the_correct_array", function () {
    // Failure message:
    // Make sure you are getting the sample test cases to pass
    expect(separate(['dog', 'cat', 'water'])).toEqual(['cat', 'water', 'dog'])

    expect(separate(['dog', 'cat', 'water', 'cat'])).toEqual(['cat', 'cat', 'water', 'dog'])

    expect(separate(['cat', 'cat', 'water', 'dog', 'water', 'cat', 'water', 'dog'])).toEqual(['cat', 'cat', 'cat', 'water', 'water', 'water', 'dog', 'dog'])

    expect(separate(
      ['cat', 'cat', 'cat', 'cat', 'cat',
        'cat', 'cat', 'cat', 'cat', 'cat', 'cat',
        'cat', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat',
        'dog', 'water', 'water', 'water', 'water', 'water',
        'water', 'water', 'water', 'water', 'water', 'water',
        'water', 'water', 'water'
      ])).toEqual(['cat', 'cat', 'cat', 'cat', 'cat',
        'cat', 'cat', 'cat', 'cat', 'cat', 'cat',
        'cat', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat',
        'water', 'water', 'water', 'water', 'water',
        'water', 'water', 'water', 'water', 'water', 'water',
        'water', 'water', 'water', 'dog']
      )
  })
})
describe("isAlternate", function () {
  it("returns_true_if_they_are_in_alternating_order", function () {
    // Failure message:
    // This test has no failure messages
    expect(isAlt("amazon")).toBe(true)
    expect(isAlt("apple")).toBe(false)
    expect(isAlt("banana")).toBe(true)
  });

})