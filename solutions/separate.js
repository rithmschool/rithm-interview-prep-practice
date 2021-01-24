// multiple loops
function separate(arr) {
  var newArr = [];
  for(let val of arr){
    if(val === "cat"){
      newArr.push("cat")
    }
  }
  for(let val of arr){
    if(val === "water"){
      newArr.push("water")
    }
  }
  for(let val of arr){
    if(val === "dog"){
      newArr.push("dog")
    }
  }
  return newArr;
}

// make 3 arrays and concat them
function separate(arr){
  return []
          .concat(arr.filter(v => v === "cat"))
          .concat(arr.filter(v => v === "water"))
          .concat(arr.filter(v => v === "dog"))
}
