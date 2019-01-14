

describe('tdd array quiz', () => {
  it('can take an array of words and returns a filtered array', () => {
    let words = ['sky', 'hot', 'Yeti', 'green'];
    let newWords = filteredWords(words);
    expect(newWords).toBeEqual(['Is it hot?', 'Is it green?'])
  });
});
