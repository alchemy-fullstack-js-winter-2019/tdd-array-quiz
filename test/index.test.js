const guessFn = require('../lib/index');

describe('guessFn', () => {
  it('can guess words in array without y or Y, and ask question', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];
    expect(guessFn(words)).toEqual(['Is it hot?', 'Is it green?']);
  });
});
