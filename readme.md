Your assignment is to write the following functions in the descriptions below - good luck!

### appendToString

The function should return a new string which consists of the second string appended to the first string.

Examples:

```js
appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
```

### prependToString

Write a function called **prependToString,** which accepts two strings.

The function should return a new string with the second string prepended to the first string.

Examples:

```js
prependToString('awesome', 'very') // 'veryawesome'
prependToString('world', 'hello ') // 'hello world'
prependToString('nothing', '') // 'nothing'
```

### charAt

Write a function called **charAt** which accepts a string and an index (number) and returns the character at that index.

The function should return an empty string if the number is greater than the length of the string.

**Do not use the built in charAt method**

Examples:

```js
charAt('awesome', 2) // 'e'
charAt('awesome', 12) // ''
```

### stringIncludes

Write a function called **stringIncludes,** which accepts two strings: the first string is a word and the second string is a single character.

The function should return `true` if the first string includes the character, otherwise it should return `false`.

Do not use the built in `String.includes()` function!

Examples:

```js
stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false
```

### stringIndexOf

Write a function called **stringIndexOf,** which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or `-1` if the character is not found.

Do not use the built in `"string".indexOf()` function!

Examples:

```js
stringIndexOf('awesome', 'e') // 2
stringIndexOf('awesome', 'z') // -1
```

### stringLastIndexOf

Write a function called **stringLastIndexOf,** which accepts two strings: the first is a word and the second is a single character.

The function should return the last index at which the character exists or `-1` if the character is not found.

Do not use the built in `"string".lastIndexOf()` **function!**

Examples:

```js
stringLastIndexOf('awesome', 'e'); // 6
stringLastIndexOf('awesome', 'z'); // -1
```

### repeat

Write a function called **repeat,** which accepts a string and a number and returns a new string with the string repeated that number of times.

**Do not use the built in repeat method**

Examples:

```js
repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''
```

### removeFromString

Write a function called **removeFromString,** which accepts a string, a starting index (number) and a number of characters to remove.

The function should return a new string with the characters removed.

Examples:

```js
removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm '
```

### includes

Write a function called **`includes`** which accepts a `collection`, a `value`, and an optional starting `index`. The function should return `true` if the `value` exists in the collection when we search starting from the starting `index`. Otherwise, it should return `false`.

The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.

Examples:

```js
includes([1, 2, 3], 1) // true
includes([1, 2, 3], 1, 2) // false
includes([1, 2, 3], 6) // false

includes({ 'a': 1, 'b': 2 }, 1) // true
includes({ 'a': 1, 'b': 2 }, 'a') // false

includes('abcd', 'b') // true
includes('abcd', 'e') // false
includes('abcd', 'a', 2) // false
```

### indexOf

Write a function called **indexOf,** which accepts an array and a number.

The function should return the first index at which the value exists or `-1` if the value is not found.

Do not use the built in `Array.indexOf()` function!

Examples:

```js
let arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

let arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

let arr3 = [1, 2];
indexOf(arr3, 10); // -1
```

### lastIndexOf

Write a function called **lastIndexOf,** which accepts an array and a number.

The function should return the last index at which the value exists, or `-1` if the value is not found.

Do not use the built in `Array.lastIndexOf()` function!

Examples:

```js
lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1
```

### max

Write a function called **max,** which accepts an array and returns the highest value.

Do not use the built-in `Math.max()` function!

Examples:

```js
max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6
```

### min

Write a function called **min,** which accepts an array of numbers and returns the lowest value.

Do note use the built-in `Math.min()` function!

Examples:

```js
min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10
```

### slice

Write a function called **slice,** which accepts an array, and two numbers.

The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

If a third parameter is not passed to the function, it should slice until the end of the array by default.

If the third parameter is greater than the length of the array, it should slice until the end of the array.

Do not use the built in `Array.slice()` function!

Examples:

```js
slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]
```

### countValues

Write a function called **countValues** which accepts an array and a number and returns the number of times that value appears in the array.

Examples:

```js
countValues([4,1,4,2,3,4,4], 4) // 4
countValues([4,1,4,2,3,4,4], 100) // 0
countValues([], 1) // 0
```

### keys

Write a function called **keys,** which accepts an object and returns an array of all of the keys in the object.

Do not use the built in `Object.keys()` function!

Examples:

```js
let obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

let obj2 = { first: 'Matt', last: 'Lane' };
keys(obj2); // ["first", "last"]

let obj3 = {};
keys(obj3); // []
```

### values

Write a function called **values,** which accepts an object and returns an array of all of the values in the object.

Do not use the built in `Object.values()` function!

Examples:

```js
let obj = { a: 1, b: 2, c: 3 };
values(obj); // [1,2,3]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); // ["Matt", "Lane", true]

let obj3 = {};
values(obj3); // []
```

### squareEvenNumbers

Write a function called **squareEvenNumbers** which accepts an array and returns the sum of all of the even numbers in the array squared.

Examples:

```js
squareEvenNumbers([1, 2, 3, 4, 5]); // 20
squareEvenNumbers([1, 3, 5, 7]); // 0
squareEvenNumbers([5, 6, 7]); // 36
```

### entries

Write a function called **entries,** which accepts an object and returns an array of arrays of key-value pairs.

In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

Do not use the built in `Object.entries()` function!

Examples:

```js
let obj = { a: 1, b: 2, c: 3 };
entries(obj);
// [["a",1], ["b",2], ["c",3]]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let obj3 = {};
entries(obj3); // []
```

### multiples

Implement a function called **multiples** that accepts two numbers: **_x_** and **_n_**.

The function should return the first **_n_** multiples of the number **_x_**.

Assume that **_x_** is a positive integer.

Examples:


```js
multiples(3, 4) // [3, 6, 9, 12]
multiples(2, 5) // [2, 4, 6, 8, 10]
```

### pluck

Write a function called **pluck**, which takes an array of objects and the name of a key.

The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

Examples:

```js
pluck([
  { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
 'name'
)
// ["Tim", "Matt", "Elie"]

pluck(
  [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
 'isBoatOwner'
)
// [true, false, undefined]
```

### twoHighest

Write a function called **twoHighest** that takes an array of numbers as its argument and returns the **two highest numbers within the array**.

The returned value should be an array in the following format: `[secondHighest, highest]`

The order of the numbers passed in could be any order.

**Do not use the build in sort() method - the tests will fail!**

Examples:

```js
twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]) // [2, 2];
```

### minMaxKeyInObject

Write a function called **minMaxKeyInObject** that accepts an object with numeric keys.*

The function should return an array with the following format: `[lowestKey, highestKey]`

Examples:

```js
minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
```

### stringFromObject

Write a function called **stringFromObject** that generates a string from an object's key/value pairs.

The format should be "key = value, key = value".

Each key/value pair should be separated by a comma and space except for the last pair.

Examples:

```js
stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"


stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"


stringFromObject({}); // ""
```

Credit - https://www.codewars.com/kata/building-strings-from-a-hash

### countNumbers

Write a function called **countNumbers**, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

Examples:

```js
countNumbers(['a','b','3','awesome','4']); // 2
countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
countNumbers('[]'); // 0
countNumbers(['4','1','0','NaN']); // 3
countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4
```

### removeVowels

Write a function called **removeVowels** which will accept a string and return a new string with all the vowels removed. You should not consider "y" to be a vowel.

Examples:

```js
removeVowels("Hello!"); // "Hll!"
removeVowels("Tomatoes"); // "Tmts"
removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
removeVowels("aeiou"); // ""
removeVowels("why try, shy fly?"); // "why try, shy fly?"
```

### findTheDuplicate

Write a function called **findTheDuplicate** which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.

Examples:

```js
findTheDuplicate([1,2,1,4,3,12]) // 1
findTheDuplicate([6,1,9,5,3,4,9]) // 9
findTheDuplicate([2,1,3,4]) // undefined
```

### totalCaps

Write a function called **totalCaps,** which accepts an array of strings and returns the total number of capitals in each of the strings. Do **not** convert the array into a string.

Examples:

```js
totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
totalCaps(["Elie", "Matt", "Tim"]) // 3
totalCaps(["hello", "world"]) // 0
```

### separate

Dogs don't get along with cats, and cats don't get along with dogs.

What they both have in common is that they don't get along with water (baths).

Given an array of 'dogs', 'cats', and 'water', write a function called **separate,** which returns a new array so that the dogs are separated from the cats by water. **Make sure that cats always come first in the array.**

You can assume that the array will always at least three elements, and that there'll always be at least one dog, one cat, and one water to work with.

**Examples:**

```js
separate(['dog','cat','water']) // ['cat','water','dog']

separate(['dog','cat','water','cat']) // ['cat', 'cat', 'water', 'dog'])

separate(['cat','cat','water','dog','water','cat','water','dog'])

// ['cat','cat','cat','water','water','water','dog','dog']

separate(['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'dog','water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water'])

 /* ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water', 'dog']
*/
```

### isAlt

Create a function `isAlt` that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

Examples:

```js
isAlt("amazon") // true
isAlt("apple") // false
isAlt("banana") // true
```

Credit - https://www.codewars.com/kata/are-we-alternate
