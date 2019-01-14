const filter = require('../lib/index');

describe('test', () => {
  it('filters out the words with the letter y', () => {
    const array = ['sky', 'hot', 'Yeti', 'green'];
    array.filter(ele => {
      return  'Is it' + ele + '?'; 
    });
    expect(array).toEqual(['Is it hot?', 'Is it green?']);
  });
});

