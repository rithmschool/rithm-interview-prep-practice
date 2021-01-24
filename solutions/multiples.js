function multiples(x, n) {
  const arr = [];
  // multiply x * i for every number from 1 up to and including n
  for (let i = 1; i <= n; i++) {
    arr.push(i * x);
  }
  return arr;
}
