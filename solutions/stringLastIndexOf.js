function stringLastIndexOf(str, char) {
  // the approach is the same as the last problem, except
  //  the loop goes backwards
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}
