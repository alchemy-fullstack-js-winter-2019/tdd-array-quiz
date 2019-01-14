// eslint-disable-next-line no-unused-vars
const { method } = require('../lib/index');

var letter1 = 'Y';
var letter2 = 'y';

var word = ['sky', 'hot', 'Yeti', 'green'];

describe('method', () => {
  it('takes an array of words and returns a new array that has removed any words that contain the letter Y or y. Has modified the original word to be a phrase of the form Is it <word>?', () => {
    // eslint-disable-next-line no-console
    const newArray = console.log(`Is it "${word.includes(!letter1 && !letter2)}`);
    return newArray;
  });

  // eslint-disable-next-line no-undef
  expect(newArray).toEqual(['Is it hot?', 'Is it green?']);
});
