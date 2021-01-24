function totalCaps(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i].charCodeAt(j) >= 65 && arr[i].charCodeAt(j) <= 90){
        count++
      }
    }
  }
  return count;
}

// an alternative version using a helper function and looping
function countCaps(str){
  const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let count = 0;
  for(let char of str){
    if(caps.includes(char)) {
      count++
    }
  }
  return count
}

function totalCaps(arr){
  let finalCount = 0;
  for(let str of arr){
    finalCount += countCaps(str)
  }
  return finalCount
}