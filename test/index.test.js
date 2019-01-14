const filterArr = require('../lib/index');

describe('filterArr', () => {
  it('will filter the words "hot" and "green" from an array and return the phrases "is it hot?" and "is it green?"', () => {
    const results = filterArr(['sky', 'hot', 'Yeti', 'green'], 'hot', 'green');
    expect(results).toEqual(['Is it hot?', 'Is it green?']);
  });
});