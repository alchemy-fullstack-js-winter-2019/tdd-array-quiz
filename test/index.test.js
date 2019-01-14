const filter = require('../lib/index');

describe('array methods', () => {
  it('filters out every odd word from an array', () => {
    let arr = ['sky', 'hot', 'Yeti', 'green'];
    let filtered = filter(arr);
    expect(filtered).toEqual(['hot', 'green']);
  });
});
