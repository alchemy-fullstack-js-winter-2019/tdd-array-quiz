const quizFilter = require('../lib/index.js');

describe('quizFilter', () => {
  it('can filter out words with both upper and lower case Y\'s and return the filtered array in the "Is it...?" question format', () => {
    const array = ['whY', 'yo', 'sky', 'red', 'winter'];
    const expectedArray = ['Is it red?', 'Is it winter?'];
    expect(quizFilter(array)).toEqual(expectedArray);
  });
});
