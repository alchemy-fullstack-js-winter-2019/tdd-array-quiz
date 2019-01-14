function filter(arr) {
  let filtered = [];
  arr.filter((element, index) => {
    if(index % 2 !== 0) {
      filtered.push(element);
    }
  });
}

module.exports = filter;
