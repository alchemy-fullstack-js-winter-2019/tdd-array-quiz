/*
Has removed any words than contain the letter Y or y. (HINT: See includes)
Has modified the original word to be a phrase of the format: "Is it <word>?"
*/
const guessFn = words => words
  .filter(words => !words.toLowerCase().includes('y')).map(word => `Is it ${word}?`);

module.exports = guessFn;
