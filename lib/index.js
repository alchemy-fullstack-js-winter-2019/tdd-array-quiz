function askY(words) {
  return words.filter(word => !word.toUpperCase().includes('Y')).map(word => `Is it ${word}?`);
}

askY(['sky', 'hot', 'Yeti', 'green']);

module.exports = askY;
