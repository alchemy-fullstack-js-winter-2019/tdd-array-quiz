function removeY(arr) {
  return arr.filter(word => {
    for(let i = 0; i < word.length; i++) {
      if(word[i] === 'Y' || word[i] === 'y') {
        return false;
      }
    }
    return true;
  });
}

console.log(removeY(['sky', 'hot', 'Yeti', 'green']));


module.exports = {
  removeY
};

