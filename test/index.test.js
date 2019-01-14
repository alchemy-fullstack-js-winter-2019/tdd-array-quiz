const newSent = require('../lib/index');

describe('test a function to filter and return a new sentence ', () => {
  it('removes any words with "y" in them and restructures the array to sentence', done => {

    const values = ['sky', 'hot', 'Yeti', 'green'];
    newSent(values, () => {
    //   expect(err).toBeFalsy();
      expect(newSent(values)).toEqual(['Is it hot?', 'Is it green?']);
      done();
    });
  });
});

