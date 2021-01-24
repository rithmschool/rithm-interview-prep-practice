function includes(item, val, startIdx) {

  if (!Array.isArray(item) && typeof item !== 'string') {
    for (let key in item) {
      if (val === item[key]) {
        return true
      }
    }
    return false;
  }

  if (startIdx === undefined) {
    return item.indexOf(val) > -1
  }

  return item.slice(startIdx).indexOf(val) > -1
}