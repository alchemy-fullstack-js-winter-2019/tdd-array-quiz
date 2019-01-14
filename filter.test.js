const { filteredArray } = require('./filter');

describe('filters and "replaces" words', () => {
  it('removes all words that contain y', () => {
    const array = ['sky', 'hot', 'Yeti', 'green'];
    const final = ['Is it hot?', 'Is it green?'];
    filteredArray(array);
    expect().toEqual(final);
  });
});