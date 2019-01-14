const replace  = require('../lib/index');

describe('replace method', () => {
  it('replace strings', () => {
    const arr1 = ['sky', 'hot', 'Yeti', 'green'].replace(ele => {ele); 
    expect(arr1).toEqual(['Is it hot?', 'Is it green?']);
  });
});

  
