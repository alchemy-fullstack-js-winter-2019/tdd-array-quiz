module.exports = {
  filter,
  map

};

function filter(arr, fn) {
  const filterArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(!arr[i].includes('sky') && !arr[i].includes('Yeti')) {
      filterArray.push(fn(arr[i]));
    }
  }
  return filterArray;
}

function map(arr, fn) {
  const mapArray = [];
  for(let i = 0; i < arr.length; i++) {
    mapArray.push(fn(arr[i]));
  }
  return mapArray;
} 
