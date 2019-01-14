
const arr = ['sky', 'hot', 'Yeti', 'green']; 

const noY = [];

//loop through the array
//find words with Y and y and remove
for(var i = 0; i < arr.length; i++) {
  if(arr[i] !== 'Y' || 'y') {
    noY.push(arr[i]);
  }
}

// let words = arr.map();

