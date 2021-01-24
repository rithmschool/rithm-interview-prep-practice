function countValues(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      count++;
    }
  }
  return count;
}
