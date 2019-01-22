const test = require('../lib/index');

describe('test array method', () => {
  it('takes an array of strings filters out any words with letter y and adds "is it (word)"'), done => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    expect(arr).toEqual(['Is it hot?', 'Is it green?'])
    done();
  }

  test(callback);
});
