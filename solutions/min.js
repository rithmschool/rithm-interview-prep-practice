function min(arr) {
  let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return lowest;
}
