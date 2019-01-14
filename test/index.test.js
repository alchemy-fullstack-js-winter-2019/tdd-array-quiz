const filter = require('../lib/index');

describe('array methods', () => {
  it('filters out every odd word from an array', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    filter(arr).toEqual(['hot', 'green']);
  });
});
