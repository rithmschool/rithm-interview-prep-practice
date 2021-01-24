function isAlt(word) {
  let vowels = ['a','e','i','o','u'];

  for (let i = 1; i < word.length; i++) {
    if ((vowels.indexOf(word[i-1]) >= 0 && vowels.indexOf(word[i]) >= 0) ||
        (vowels.indexOf(word[i-1]) === -1 && vowels.indexOf(word[i]) === -1)) {
      return false;
    }
  }
  return true;
}