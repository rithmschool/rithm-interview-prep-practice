function stringIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  // by the time you've reached this line, the loop has examined
  //   every single character in the string
  return -1;
}
