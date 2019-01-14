
describe('array methods', () => {
  describe('y removal', () => {
    it('takes an array of words & removes words with letter y or Y', () => {
      const words = ['sky', 'hot', 'Yeti', 'green']
    });
      expect(words).toEqual(['hot', 'green']);
      
    });
  });
  describe('phrase modify', () => {
  it('modifies the original word to be a phrase of the format "Is it <word>?"', () => {
  const words = ['hot', 'green']
  });
  expect(words).toEqual('Is it' + words + '?')
});