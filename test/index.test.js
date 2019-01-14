const guessFn = require('../lib/index');

describe('guessFn', () => {
  it('can guess words in array without y or Y, and ask question', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];
    expect(guessFn(words)).toEqual(['Is it hot?', 'Is it green?']);
  });
  it('if no words in array have y or Y, can reply with all words and ask questions', () => {
    const words = ['blue', 'red', 'green', 'purple'];
    expect(guessFn(words)).toEqual(['Is it blue?', 'Is it red?', 'Is it green?', 'Is it purple?']);
  });
});
