const array = require('./lib/index');

describe('array methods', () => {
  describe('filter', () => {
    it('should filter out', () => {
      const arr = ['why', 'Yay', 'blue'];
      const filterY = ['Y', 'y'].filter(ele => {
        
      });
      expect(filterY).toEqual([]);
    });
  });

  describe('word creation', () => {
    const arr = ['cold', 'Yay', 'it', 'is'];
    const words = arr.map( string => {
      return 
    })
  });
  expect(arr).toEqual(['Yay it is cold']);
})

