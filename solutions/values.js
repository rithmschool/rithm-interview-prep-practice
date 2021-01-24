function values(obj) {
  let valuesArr = [];
  for (let key in obj) {
    valuesArr.push(obj[key]);
  }
  return valuesArr;
}
