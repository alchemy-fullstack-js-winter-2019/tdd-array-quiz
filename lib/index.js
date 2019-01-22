var letter1 = 'Y';
var letter2 = 'y';

function arrayQuiz(arr, fn) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.includes(!letter1 && !letter2)) {
      newArr[i] = fn(arr[i]);
    }
  }
}

module.exports = {
  arrayQuiz
};
