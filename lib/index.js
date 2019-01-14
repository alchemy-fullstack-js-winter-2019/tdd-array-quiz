//const fs = require('fs');

const arr = ['sky', 'hot', 'Yeti', 'green'];
const filteredArr = [];

const filtered = () => {
  for(let i = 0; i < arr.length; i++) {
    if(arr.includes('y')) {
      filteredArr.push(arr[i]);
    }    
    if(arr.includes('Y')) { // can't remember how to get toLowerCase to work!
      filteredArr.push(arr[i]);
    }  
    return filteredArr;
  }
};
console.log(filtered());

const sentence = () => {
  for(let i = 0; i < arr.length; i++) {
    return 'Is it ' + filteredArr[i] + '?';
  }
};
console.log(sentence());

module.exports = {
  filtered,
  sentence
};
