function findTheDuplicate(arr){
  let counter = {}
  for(let i = 0; i < arr.length; i++){
    if(arr[i] in counter){
      counter[arr[i]]++
    } else {
      counter[arr[i]] = 1;
    }
  }
  for(let key in counter){
    if(counter[key] > 1) return +key
  }
}