function removeY(arr) {
  return arr.filter(word => {
    for(let i = 0; i < word.length; i++) {
      console.log(word[i]);
    }
  });
}

console.log(removeY(['sky', 'hot', 'Yeti', 'green']));


module.exports = {
  removeY
};

