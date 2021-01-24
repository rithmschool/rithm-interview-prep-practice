function pluck(arr, key) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
  }
  return newArr;
}