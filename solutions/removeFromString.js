// converting to an array method
function removeFromString(str, start, removeCount) {
  let arr = str.split('');
  arr.splice(start, removeCount);
  return arr.join('');
}

// regular method
function removeFromString(str, start, removeCount) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i < start || i >= start + removeCount) {
      newStr += str[i];
    }
  }
  return newStr;
}
