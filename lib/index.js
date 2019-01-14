/*
Has removed any words than contain the letter Y or y. (HINT: See includes)
Has modified the original word to be a phrase of the format: "Is it <word>?"
*/
const guessFn = words => words
  // find the words that don't use y or Y
  .filter(words => !words.toLowerCase().includes('y'))
  // go through and ask question using retrieved words
  .map(word => `Is it ${word}?`);

module.exports = guessFn;
