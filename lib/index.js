function filter(arr, fn) {
  arr.split('');

  const filtered = [];
  
  for(let i = 0; i < arr.length; i ++) {
    
    const element = arr[i];

    if(fn(element)) {
      filtered.push(element);
    }
  }
  return filtered;
}

module.exports = filter;
