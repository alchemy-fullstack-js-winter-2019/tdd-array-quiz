function quizFilter(array) {
  const filtered = [];
  const updatedArray = [];

  for(let i = 0; i < array.length; i++) {
    if(!array[i].includes('y') && !array[i].includes('Y')) {
      filtered.push(array[i]);
    }
  }

  filtered.map(word => updatedArray.push(`Is it ${word}?`));

  return updatedArray;
}

module.exports = quizFilter;
