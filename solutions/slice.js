function slice(arr, start, end) {
  let newArr = [];
  // handle end not being passed or being too large
  if (end === undefined || end > arr.length) {
    end = arr.length;
  }
  // slice from start to end
  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
