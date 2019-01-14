const quizFilter = require('../lib/index.js');

describe('quizFilter', () => {
  it('can filter out words with both lower case and capital Y\'s and return the filtered array in the question format', () => {
    const array = ['whY', 'yo', 'sky', 'red', 'winter'];
    const expectedArray = ['Is it red?', 'Is it winter?'];
    expect(quizFilter(array)).toEqual(expectedArray);
  });
});
