function countNumbers(arr){
  let count = 0;
  for(let val of arr){
    let valToNumber = parseInt(val)
    let isValNaN = isNaN(valToNumber)
    if(isValNaN === false){
      count++
    }
  }
  return count;
}

// ANOTHER OPTION
// function countNumbers(arr){
//   // return an array of values that are not NaN when converted to a string
//   // and calculate the length
//   return arr.filter(val => !isNaN(parseInt(val))).length
// }