function filter(arr) {
  let filtered = [];
  arr.filter((element) => {
    if(!element.includes('y') && !element.includes('Y')) {
      filtered.push(element);
    }
  });
  return filtered;
}

function quest(arr) {
  let results = [];
  arr.forEach(word => {
    results.push(`is it ${word}?`);
  });
  console.log(results);
  return results;
}

module.exports = { filter, quest };
