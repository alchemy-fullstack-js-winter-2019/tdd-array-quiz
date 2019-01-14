function filterArr(arr, param1, param2) {
  return arr.filter(ele => {
    if(ele === param1 && param2) {
      return `is it ${param1}` && `is it ${param2}`
    } 
  });
}

module.exports = filterArr;