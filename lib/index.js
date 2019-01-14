function filter(arr) {
  let filtered = [];
  arr.filter((element) => {
    if(!element.includes('y') && !element.includes('Y')) {
      console.log(element);
      filtered.push(element);
    }
  });
  return filtered;
  // filtered.map()
}

module.exports = filter;
