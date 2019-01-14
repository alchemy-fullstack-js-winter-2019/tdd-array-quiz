const { filter  } = require('../lib/index');
const { map } = require('../lib/index');

describe('arry methods', () => {
  describe('implentation of map', () => {
    it('removes any letters with "y" or "Y"', () => {
      const filterResult = filter(['sky', 'hot', 'Yeti', 'green'], ele => {
        if(ele.includes('sky', 'Yeti'));
        return ele;
      });
      expect(filterResult).toEqual(['hot', 'green']);
    });
  });
  describe('implementation of map', () => {
    it('map', () => {
      var word = 'hot';
      var word2 = 'green';
      const result = map([`Is it ${word}?`, `Is it ${word2}?`], ele => {
        return ele; 
      });
      expect(result).toEqual(['Is it hot?', 'Is it green?']); 
    });
  });
});
