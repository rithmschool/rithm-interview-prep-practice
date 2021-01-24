function max(arr) {
  // we can use the first element as the default 'maximum'
  let maximum = arr[0];
  // then if we encounter a larger element in the rest of the array,
  //   replace the value. Note we can start our loop at index 1
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}
