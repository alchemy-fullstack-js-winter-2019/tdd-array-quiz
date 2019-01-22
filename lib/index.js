//filter out Y and y
function filter(arr, fn) {
  const filteredArr = [];

  for(let i = 0; i < arr.length; i ++) {
    const element = arr[i];
  
    if(fn(element) == 'Y') {
      return filteredArr;
    }
  }
}

//changes format to is it word?
function format(arr) {
  const formatedArr = [];


}

module.exports = {
  filter
};
