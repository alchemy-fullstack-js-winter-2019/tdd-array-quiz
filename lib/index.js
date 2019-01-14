function filterArr(arr) {
  const newArr = arr.filter(ele => {
    ele !== 'y' || 'Y';
  });
  return newArr.forEach(ele => `Is it ${ele}`);
}

module.exports = filterArr;
