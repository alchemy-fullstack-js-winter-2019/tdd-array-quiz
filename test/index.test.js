const askY = require('../lib/index');

describe('askY', () => {
  it('removes words with y and changes remaining words', () => {
    const words = ['sky', 'hot', 'Yeti', 'green'];

    expect(askY(words)).toEqual(words);
  });
});
