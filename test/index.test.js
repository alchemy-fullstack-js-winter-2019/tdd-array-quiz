const { 
  filter
} = require('../lib/index');

describe('filter', () => {
  it('takes out words with Y or y', () => {
    const filtered = ['sky', 'hot', 'Yeti', 'green'].filter(ele => {
      return ele % 2 === 0;
    });
    expect(filtered).toEqual(['sky', 'hot', 'green']);
  });
  
  it('changes format to Is it <word>?', () => {
    const format = ['sky', 'hot', 'green'];
    expect(format).toEqual(['Is it sky?', 'Is it hot?', 'Is it green?']);
  });
  
});
