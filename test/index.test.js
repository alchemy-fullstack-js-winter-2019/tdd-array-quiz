const { filter, quest } = require('../lib/index');

describe('array methods', () => {
  it('filters out every word with a y from an array', () => {
    let arr = ['sky', 'hot', 'Yeti', 'green'];
    let filtered = filter(arr);
    expect(filtered).toEqual(['hot', 'green']);
  });
  it('adds those words back into the array in the form of a question', () => {
    let arr = ['hot', 'green'];
    let question = quest(arr);
    expect(question).toEqual(['is it hot?', 'is it green?']);
  });
});

