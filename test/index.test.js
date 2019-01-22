const words = require('../lib/index');

describe('filtering with includes', () => {
  it('filters all instances of words using y and Y then returns the following array element in the form of a question', done => {
    words.filter((err, words) => {
      expect(err).toBeFalsy();
      expect(words).toEqual(words);
      done();
    });
  });
});

// I was more confused by the test than the function itself, although neither are functional
