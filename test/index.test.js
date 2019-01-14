const removeY = require('../lib/index');

describe('removes words containing y or Y ', () => {
  it('implemented function', () => {
    removeY((string)=> {
      string = ['yesterday', 'Yellow', 'this', 'passes'];
      string.filter(function(ele){
        if(!ele.includes('y' || 'Y')){
          return ele;
        }
      });
      expect(string).toEqual(['this', 'passes']);
    });
  });
});
