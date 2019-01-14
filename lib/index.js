function quizFilter(array) {
  const filtered = [];
  const updatedArray = [];

  for(let i = 0; i < array.length; i++) {
    const letter1 = 'y';
    const letter2 = 'Y';
    if(!array[i].includes(letter1) && !array[i].includes(letter2)) {
      filtered.push(array[i]);
    }
  }

  filtered.map(word => updatedArray.push(`Is it ${word}?`));

  return updatedArray;
}

console.log(quizFilter(['whY', 'hi', 'yo', 'sky', 'cat', 'red', 'winter']));

module.exports = quizFilter;

