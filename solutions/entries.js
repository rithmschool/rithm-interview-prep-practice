function entries(obj) {
  let container = [];
  for (let key in obj) {
    // push a sub-array of [key, obj] into the parent array
    container.push([key, obj[key]]);
  }
  return container;
}
