const test = require('../lib/index.js');

describe('test', () => {

  const arr = ['sky', 'hot', 'Yeti', 'green'];
  it('filters out words containing "y"');
  const itsFiltered = () => {
    expect(arr.filtered).toEqual('sky', 'green');
  };
 
  it('returns new string "is it hot, is it green"');
  const newSentence = () => {
    expect(arr.sentence).toEqual('Is it hot? Is it green?');
    done();
  };  
});
